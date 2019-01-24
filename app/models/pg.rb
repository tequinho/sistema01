class Pg < ApplicationRecord
	has_many :members
	has_one :leader
end
