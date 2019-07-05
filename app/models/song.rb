# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  album_id   :integer          not null
#  artist_id  :integer          not null
#  title      :string           not null
#  length     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord
    validates :title, :length, presence:true
    belongs_to :artist
    belongs_to :album
    
    has_many :playlist_songs

    has_one_attached :mp3
end
