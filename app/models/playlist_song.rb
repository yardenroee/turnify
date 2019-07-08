# == Schema Information
#
# Table name: playlist_songs
#
#  id          :bigint           not null, primary key
#  song_id     :integer          not null
#  playlist_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistSong < ApplicationRecord
    validates :playlist_id, :song_id, presence: true

    belongs_to :song
    belongs_to :playlist
end
