# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
User.delete_all
Video.delete_all


demoUser = User.create!(
        username: "DemoUser",
        password: "123456",
        email: 'DemoUser@demoemail.com'
)

# video1 = Video.create!(
#         title: 'Space Jam', 
#         description: 'In a galaxy far away a man teams up with the Looney Tunes to play against the MonStars, can they win against all odds?', 
#         genre: 'Fiction', 
#         rating: 5
# )


# video2 = Video.create!(
#         title: 'The Ring', 
#         description: 'What happens when you watch a tape that you are not supposed to see? Find out and maybe you can live beyond the 7 days', 
#         genre: 'Horror', 
#         rating: 2
# )

# video3 = Video.create!(
#         title: 'Just Go With It', 
#         description: 'He meets the girl of his dreams but ends up having to continue lying to keep her around, before long he is so deep in he has brought along his assistant and her family to help and falls for her, follow along and find out what is a "Devlin"', 
#         genre: 'Comedy', 
#         rating: 3
# )

# # video4 = Video.create!(
# #         title: 'Extraction', 
# #         description: 'Offered a job to save the son of a wealthy drug lord, kidnapped behind enenmy lines, one man takes on a challenge. When all original plans go awry what does he do? Should he just give up, leave the kid or risk his life trying to get him to safety?', 
# #         genre: 'Action', 
# #         rating: 5
# # )

# video5 = Video.create!(
#         title: 'Jeffrey Espstein: Filthy Rich', 
#         description: ' rich', 
#         genre: 'Non-Fiction', 
#         rating: 3

# )

# video6 = Video.create!(
#         title: 'Spider-man: Into the Spider-Verse', 
#         description: "Miles Morales was just a normal teenager from Brooklyn NY, when he found himself bitten by a radioactive spider while tagging up on NYC subway station with his uncle, now he's experiencing all sorts of changes and watches Peter Parker die before his own eyes, what will he do now?", 
#         genre: 'Family', 
#         rating: 5
        
# )

# video7 = Video.create!(
#         title: 'The Last Dance', 
#         description: 'Follow Michael Jordan and the 1998 Chicago Bulls as they win their last championship. Learn the kind of attitude it takes to win 6 championships in 8 years', 
#         genre: 'Non-fiction', 
#         rating: 1
# )

# video8 = Video.create!(
#         title: 'Despicable Me', 
#         description: ' banana', 
#         genre: 'Family', 
#         rating: 0
# )

# video9 = Video.create!(
#         title: 'FYRE', 
#         description: 'It was supposed to be the festival of the century with a ton of celebrities backing it up, see where it all went wrong', 
#         genre: 'Non-fiction', 
#         rating: 2
# )

video10 = Video.create!(
        title: '6 Underground', 
        description: 'underground ', 
        genre: 'Action', 
        rating: 2
)
file = open('https://viewflix-seeds.s3.amazonaws.com/6+Underground+starring+Ryan+Reynolds+%7C+Official+Trailer+%7C+Netflix.mp4')
video10.video.attach(io: file, filename: '6+Underground+starring+Ryan+Reynolds+%7C+Official+Trailer+%7C+Netflix.mp4')
file = open('https://viewflix-seeds.s3.amazonaws.com/6underground.jpg')
video10.poster.attach(io: file, filename: '6underground.jpg')

# video11 = Video.create!(
#         title: 'Olympus Has Fallen', 
#         description: 'olympus ', 
#         genre: 'Action', 
#         rating: 4
# )

# video12 = Video.create!(
#         title: 'Bad Boys 2', 
#         description: 'Mike Lowry and ', 
#         genre: 'Action', 
#         rating: 5
# )

# video13 = Video.create!(
#         title: 'Tall Girl', 
#         description: 'tall girl ', 
#         genre: 'Family', 
#         rating: 3
# )

# video14 = Video.create!(
#         title: 'The Little Vampire', 
#         description: 'vampire ', 
#         genre: 'Family', 
#         rating: 3
# )

# video15 = Video.create!(
#         title: 'The Croods', 
#         description: 'croods', 
#         genre: 'Non-fiction', 
#         rating: 3
# )

# video16 = Video.create!(
#         title: 'The Wrong Missy', 
#         description: 'wrong ', 
#         genre: 'Comedy', 
#         rating: 5
# )

# video17 = Video.create!(
#         title: 'Bird Box', 
#         description: 'Bird box ', 
#         genre: 'Horror', 
#         rating: 4
# )

# video18 = Video.create!(
#         title: 'Insidious 2', 
#         description: 'Insidious ', 
#         genre: 'Horror', 
#         rating: 3
# )

# video19 = Video.create!(
#         title: 'Carrie', 
#         description: ' Carrie', 
#         genre: 'Horror', 
#         rating: 4
# )

# video20 = Video.create!(
#         title: 'Rim Of The World', 
#         description: 'Rim ', 
#         genre: 'Family', 
#         rating: 3
# )

# video21 = Video.create!(
#         title: 'Battle: Los Angeles', 
#         description: 'Battle ', 
#         genre: 'Fiction', 
#         rating: 3
# )
