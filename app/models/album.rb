# == Schema Information
#
# Table name: albums
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  artist_id    :integer          not null
#  release_year :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Album < ApplicationRecord
    validates :title, :release_year, presence:true

    has_many :songs
    belongs_to :artist

    has_one_attached :photo
end
