class Task < ApplicationRecord
  belongs_to :list, class_name: 'List', foreign_key: 'guid'
end
