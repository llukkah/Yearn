class Location < ApplicationRecord
  belongs_to :user
  has_many :tasks

  def self.return_data
    all.map do |location|
      {
        **location.attributes.symbolize_keys, 
        tasks: location.tasks
      }
    end

  end

end
