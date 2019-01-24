class Member < ApplicationRecord
  belongs_to :pg
  enum status: [:active, :inactive]
end
