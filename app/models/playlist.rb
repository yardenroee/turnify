# == Schema Information
#
# Table name: playlists
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
    validates :title, presence:true

    has_many :playlist_songs
    belongs_to :user
    has_many :songs, through: :playlist_songs
    has_many :albums, through: :songs, source: :album
    has_many :artists, through: :songs, source: :artist
    has_one_attached :photo
end
