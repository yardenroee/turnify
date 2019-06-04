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

require 'test_helper'

class SongTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
