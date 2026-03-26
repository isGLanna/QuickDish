package validators

type AddressSchema struct {
	Street    string `json:"street, max=75"`
	Reference string `json:"reference, max=100"`
	Number    string `json:"number, max=10"`
	City      string `json:"city, max=30"`
	State     string `json:"state, max=2"`
	Cep       string `json:"cep, max=10"`
}
