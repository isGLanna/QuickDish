package providers

import (
	"backend/src/utils"
	"errors"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

// EnterpriseId deve ser incluído no payload de empresas
type payload struct {
	Id           uint
	EnterpriseId uint
	Role         string `gorm:"type:enum('admin', 'restaurant', 'delivery_person')"`
}

type JWTProvider struct {
	secretKey string
}

func NewJWTProvider() *JWTProvider {
	return &JWTProvider{
		secretKey: utils.GetEnv("JWT_SECRET_KEY", "SuperSecretKey"),
	}
}

func (p *JWTProvider) Sign(payload payload) (string, error) {
	claims := jwt.MapClaims{
		"sub":           payload.Id,
		"enterprise_id": payload.EnterpriseId,
		"role":          payload.Role,
		"exp":           time.Now().Add(24 * time.Hour).Unix(),
		"iss":           "QuickDish",
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	return token.SignedString([]byte(p.secretKey))
}

func (p *JWTProvider) Verify(tokenString string) (*payload, error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (any, error) {
		return []byte(p.secretKey), nil
	})

	switch {
	case token.Valid:
		claims := token.Claims.(jwt.MapClaims)
		return &payload{
			Id:           uint(claims["sub"].(int64)),
			EnterpriseId: uint(claims["enterprise_id"].(int64)),
			Role:         claims["roles"].(string),
		}, nil

	case errors.Is(err, jwt.ErrTokenExpired) || errors.Is(err, jwt.ErrTokenNotValidYet):
		return nil, err

	case errors.Is(err, jwt.ErrTokenSignatureInvalid):
		return nil, err

	default:
		return nil, err
	}
}
