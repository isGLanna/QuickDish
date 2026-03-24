package models

import (
	"gorm.io/datatypes"
)

type EventTracking struct {
	Id        uint   `gorm:"primaryKey autoIncrement" json:"id"`
	ClientId  uint   `gorm:"not null;index::idx_client_id" json:"client_id"`
	SessionId string `gorm:"size:100;index:idx_session_id" json:"session_id"`

	// EventType can be "view_food", "purchase_food", "search_food"
	EventType string `gorm:"not null; size:30; index:idx_event_type" json:"event_type"`
	Entity    string `gorm:"not null; size:30" json:"entity"`
	EntityId  *uint  `gorm:"index" json:"entity_id"`

	Metadata datatypes.JSON `gorm:"type:json;index:idx_metadata" json:"metadata"`

	CreatedAt int64 `gorm:"autoCreateTime" json:"created_at"`
}
