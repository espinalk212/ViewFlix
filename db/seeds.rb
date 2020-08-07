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

video1 = Video.create!(
        title: 'Space Jam', 
        description: 'In a galaxy far away a man teams up with the Looney Tunes to play against the MonStars, can they win against all odds?', 
        genre: 'Fiction', 
        rating: 5
)
file = open('https://viewflix-seeds.s3.amazonaws.com/Space+Jam+(1996)+Official+Trailer+-+Michael+Jordan%2C+Bill+Murray+Movie+HD.mp4')
video1.video.attach(io: file, filename: 'extraction.mp4')
file = open('https://viewflix-seeds.s3.amazonaws.com/spacejam1.png')
video1.poster.attach(io: file, filename: 'spacejam1.png')


video2 = Video.create!(
        title: 'The Ring', 
        description: 'What happens when you watch a tape that you are not supposed to see? Find out and maybe you can live beyond the 7 days', 
        genre: 'Horror', 
        rating: 2
)
file = open('https://viewflix-seeds.s3.amazonaws.com/The+Ring+(2002)+Trailer+%231+%7C+Movieclips+Classic+Trailers+1.mp4')
video2.video.attach(io: file, filename: 'thering.mp4')
file = open('https://viewflix-seeds.s3.amazonaws.com/thering1.png')
video2.poster.attach(io: file, filename: 'thering1.png')

video3 = Video.create!(
        title: 'Just Go With It', 
        description: 'He meets the girl of his dreams but ends up having to continue lying to keep her around, before long he is so deep in he has brought along his assistant and her family to help and falls for her, follow along and find out what is a "Devlin"', 
        genre: 'Comedy', 
        rating: 3
)
file = open('https://viewflix-seeds.s3.amazonaws.com/Official+Trailer%3A+Just+Go+With+it+(2011).mp4')
video3.video.attach(io: file, filename: 'justgowithit.mp4')
file = open('https://viewflix-seeds.s3.amazonaws.com/justgowithit1.png')
video3.poster.attach(io: file, filename: 'justgowithit.png')


video4 = Video.create!(
        title: 'Extraction', 
        description: 'Offered a job to save the son of a wealthy drug lord, kidnapped behind enenmy lines, one man takes on a challenge. When all original plans go awry what does he do? Should he just give up, leave the kid or risk his life trying to get him to safety?', 
        genre: 'Action', 
        rating: 5
)
file = open('https://viewflix-seeds.s3.amazonaws.com/Extraction.mp4')
video4.video.attach(io: file, filename: 'extraction.mp4')
file = open('https://viewflix-seeds.s3.amazonaws.com/extraction1.png')
video4.poster.attach(io: file, filename: 'extraction.png')

video5 = Video.create!(
        title: 'Jeffrey Espstein: Filthy Rich', 
        description: ' rich', 
        genre: 'Non-Fiction', 
        rating: 3
)
file = open('https://viewflix-seeds.s3.amazonaws.com/Jeffrey+Epstein%3A+Filthy+Rich+%7C+Official+Trailer+%7C+Netflix.mp4')
video5.video.attach(io: file, filename: 'jeffreyepstein.mp4')
file = open('https://viewflix-seeds.s3.amazonaws.com/jeffreyepstein2.png')
video5.poster.attach(io: file, filename: 'jeffreyepstein2.png')



video6 = Video.create!(
        title: 'Spider-man: Into the Spider-Verse', 
        description: "Miles Morales was just a normal teenager from Brooklyn NY, when he found himself bitten by a radioactive spider while tagging up on NYC subway station with his uncle, now he's experiencing all sorts of changes and watches Peter Parker die before his own eyes, what will he do now?", 
        genre: 'Family', 
        rating: 5  
)
file = open('https://viewflix-seeds.s3.amazonaws.com/SPIDER-MAN%3A+INTO+THE+SPIDER-VERSE+-+Official+Trailer+%232+(HD).mp4')
video6.video.attach(io: file, filename: 'spiderman.mp4')
file = open('https://viewflix-seeds.s3.amazonaws.com/spiderman.png')
video6.poster.attach(io: file, filename: 'spiderman.png')



video7 = Video.create!(
        title: 'The Last Dance', 
        description: 'Follow Michael Jordan and the 1998 Chicago Bulls as they win their last championship. Learn the kind of attitude it takes to win 6 championships in 8 years', 
        genre: 'Non-fiction', 
        rating: 1
)
file = open('https://viewflix-seeds.s3.amazonaws.com/The+Last+Dance+%7C+Relive+the+Phenomenon+%7C+Netflix.mp4')
video7.video.attach(io: file, filename: 'thelastdance.mp4')
file = open('https://viewflix-seeds.s3.amazonaws.com/thelastdance1.png')
video7.poster.attach(io: file, filename: 'thelastdance.png')


video8 = Video.create!(
        title: 'FYRE', 
        description: 'It was supposed to be the festival of the century with a ton of celebrities backing it up, see where it all went wrong', 
        genre: 'Non-fiction', 
        rating: 2
)
file = open('https://viewflix-seeds.s3.amazonaws.com/FYRE%3A+The+Greatest+Party+That+Never+Happened+%7C+Official+Trailer+%5BHD%5D+%7C+Netflix.mp4')
video8.video.attach(io: file, filename: 'fyre.mp4')
file = open('https://viewflix-seeds.s3.amazonaws.com/fyre2.png')
video8.poster.attach(io: file, filename: 'fyre.png')

video9 = Video.create!(
        title: '6 Underground', 
        description: 'underground ', 
        genre: 'Action', 
        rating: 2
)
file = open('https://viewflix-seeds.s3.amazonaws.com/6underground.mp4')
video9.video.attach(io: file, filename: '6underground.mp4')
file = open('https://viewflix-seeds.s3.amazonaws.com/6underground1.png')
video9.poster.attach(io: file, filename: '6underground.png')

video10 = Video.create!(
        title: 'Olympus Has Fallen', 
        description: 'olympus ', 
        genre: 'Action', 
        rating: 4
)
file = open('https://viewflix-seeds.s3.amazonaws.com/Olympus+Has+Fallen+Official+Trailer+%231+(2013)+-+Morgan+Freeman+Movie+HD.mp4')
video10.video.attach(io: file, filename: 'olympus.mp4')
file = open('https://viewflix-seeds.s3.amazonaws.com/olympus1.png')
video10.poster.attach(io: file, filename: 'olympus.png')

video11 = Video.create!(
        title: 'Bad Boys 2', 
        description: 'Mike Lowry and ', 
        genre: 'Action', 
        rating: 5
)
file = open('https://viewflix-seeds.s3.amazonaws.com/Bad+Boys+II.mp4')
video11.video.attach(io: file, filename: 'BadBoys2.mp4')
file = open('https://viewflix-seeds.s3.amazonaws.com/badboys21.png')
video11.poster.attach(io: file, filename: 'BadBoys2.png')


video12 = Video.create!(
        title: 'Tall Girl', 
        description: 'tall girl ', 
        genre: 'Family', 
        rating: 3
)
file = open('https://viewflix-seeds.s3.amazonaws.com/Tall+Girl.mp4')
video12.video.attach(io: file, filename: 'tallgirl.mp4')
file = open('https://viewflix-seeds.s3.amazonaws.com/tallgirl1.png')
video12.poster.attach(io: file, filename: 'tallgirl.png')


video13 = Video.create!(
        title: 'The Little Vampire', 
        description: 'vampire ', 
        genre: 'Family', 
        rating: 3
)
file = open('https://viewflix-seeds.s3.amazonaws.com/THE+LITTLE+VAMPIRE+Official+Trailer+(2018)+Animated+Movie+HD.mp4')
video13.video.attach(io: file, filename: 'thelittlevampire.mp4')
file = open('https://viewflix-seeds.s3.amazonaws.com/thelittlevampire1.png')
video13.poster.attach(io: file, filename: 'thelittlevampire.png')



video14 = Video.create!(
        title: 'The Croods', 
        description: 'croods', 
        genre: 'Non-fiction', 
        rating: 3
)
file = open('https://viewflix-seeds.s3.amazonaws.com/The+Croods+-+Trailer.mp4')
video14.video.attach(io: file, filename: 'thecroods.mp4')
file = open('https://viewflix-seeds.s3.amazonaws.com/thecroods1.png')
video14.poster.attach(io: file, filename: 'thecroods.png')



video15 = Video.create!(
        title: 'The Wrong Missy', 
        description: 'wrong ', 
        genre: 'Comedy', 
        rating: 5
)
file = open('https://viewflix-seeds.s3.amazonaws.com/The+Wrong+Missy.mp4')
video15.video.attach(io: file, filename: 'TheWrongMissy.mp4')
file = open('https://viewflix-seeds.s3.amazonaws.com/thewrongmissy1.png')
video15.poster.attach(io: file, filename: 'TheWrongMissy.png')


video16 = Video.create!(
        title: 'Bird Box', 
        description: 'Bird box ', 
        genre: 'Horror', 
        rating: 4
)
file = open('https://viewflix-seeds.s3.amazonaws.com/Bird+Box.mp4')
video16.video.attach(io: file, filename: 'birdbox.mp4')
file = open('https://viewflix-seeds.s3.amazonaws.com/birdbox1.png')
video16.poster.attach(io: file, filename: 'birdbox.png')


video17 = Video.create!(
        title: 'Insidious 2', 
        description: 'Insidious ', 
        genre: 'Horror', 
        rating: 3
)
file = open('https://viewflix-seeds.s3.amazonaws.com/Insidious%3A+Chapter+2+Official+Trailer+%231+(2013)+-+Patrick+Wilson+Movie+HD.mp4')
video17.video.attach(io: file, filename: 'insidious.mp4')
file = open('https://viewflix-seeds.s3.amazonaws.com/insidious22.png')
video17.poster.attach(io: file, filename: 'insidious.png')


video18 = Video.create!(
        title: 'Carrie', 
        description: ' Carrie', 
        genre: 'Horror', 
        rating: 4
)
file = open('https://viewflix-seeds.s3.amazonaws.com/Carrie.mp4')
video18.video.attach(io: file, filename: 'carrie.mp4')
file = open('https://viewflix-seeds.s3.amazonaws.com/carrie2.png')
video18.poster.attach(io: file, filename: 'carrie.png')


video19 = Video.create!(
        title: 'Rim Of The World', 
        description: 'Rim ', 
        genre: 'Family', 
        rating: 3
)
file = open('https://viewflix-seeds.s3.amazonaws.com/Carrie.mp4')
video19.video.attach(io: file, filename: 'carrie.mp4')
file = open('https://viewflix-seeds.s3.amazonaws.com/carrie2.png')
video19.poster.attach(io: file, filename: 'carrie.png')

video20 = Video.create!(
        title: 'Battle: Los Angeles', 
        description: 'Battle ', 
        genre: 'Fiction', 
        rating: 3
)
file = open('https://viewflix-seeds.s3.amazonaws.com/BATTLE+LOS+ANGELES.mp4')
video20.video.attach(io: file, filename: 'battlela.mp4')
file = open('https://viewflix-seeds.s3.amazonaws.com/battlela2.png')
video20.poster.attach(io: file, filename: 'battlela.png')


# video21 = Video.create!(
#         title: 'Despicable Me', 
#         description: ' banana', 
#         genre: 'Family', 
#         rating: 5
# )

