package validators

type Credentials struct {
	Email    string `json:"email" binding:"required, email"`
	Password string `json:"password" binding:"required, min=6"`
}

type RegisterSchema struct {
	Name     string `json:"name" binding:"required"`
	Register Credentials
}

type RegisterRestaurantSchema struct {
	RegisterStandard RegisterSchema
	Cnpj             string `json:"cnpj" binding:"required,len=18" validate:"cnpj,startswith=56"`
	Address          []AddressSchema
	LogoUrl          string
}

type RegisterUserSchema struct {
	RegisterStandard RegisterSchema
	Surname          string        `json:"surname" binding:"required"`
	Telephone        string        `json:"telephone" binding:"required"`
	Address          AddressSchema `json:"address" binding:"required"`
}
