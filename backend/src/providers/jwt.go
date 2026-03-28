package providers

import (
	"backend/src/utils"
	"errors"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

// EnterpriseId deve ser incluído no payload de empresas
type Payload struct {
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

func (p *JWTProvider) Sign(payload Payload) (string, error) {
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

func (p *JWTProvider) Verify(tokenString string) (*Payload, error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (any, error) {
		return []byte(p.secretKey), nil
	})

	if err != nil {
		return nil, errors.New("Acesso negado")
	}

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		return &Payload{
			Id:           uint(claims["sub"].(float64)),
			EnterpriseId: uint(claims["enterprise_id"].(float64)),
			Role:         claims["role"].(string),
		}, nil
	}
	return nil, errors.New("Acesso negado")
}
