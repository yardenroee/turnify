# == Schema Information
#
# Table name: artists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord
    validates :name, presence:true, uniqueness:true
    has_many :songs
    has_many :albums

    has_one_attached :photo
    has_one_attached :header
end
