class Category < ActiveRecord::Base
  has_many :skill_categories
  has_many :skills, through: :skill_categories
end