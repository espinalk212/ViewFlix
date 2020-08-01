# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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

video2 = Video.create!(
        title: 'The Ring', 
        description: 'What happens when you watch a tape that you are not supposed to see? Find out and maybe you can live beyond the 7 days', 
        genre: 'Horror', 
        rating: 2
)

video3 = Video.create!(
        title: 'Just Go With It', 
        description: 'He meets the girl of his dreams but ends up having to continue lying to keep her around, before long he is so deep in he has brought along his assistant and her family to help and falls for her, follow along and find out what is a "Devlin"', 
        genre: 'Comedy', 
        rating: 3
)

video4 = Video.create!(
        title: 'Extraction', 
        description: 'Offered a job to save the son of a wealthy drug lord, kidnapped behind enenmy lines, one man takes on a challenge. When all original plans go awry what does he do? Should he just give up, leave the kid or risk his life trying to get him to safety?', 
        genre: 'Action', 
        rating: 5
)

video5 = Video.create!(
        title: 'Jeffrey Espstein: Filthy Rich', 
        description: '', 
        genre: 'Non-Fiction', 
        rating: 3

)

video6 = Video.create!(
        title: 'Spider-man: Into the Spider-Verse', 
        description: "Miles Morales was just a normal teenager from Brooklyn NY, when he found himself bitten by a radioactive spider while tagging up on NYC subway station with his uncle, now he's experiencing all sorts of changes and watches Peter Parker die before his own eyes, what will he do now?", 
        genre: 'Family', 
        rating: 5
        
)

video7 = Video.create!(
        title: 'The Last Dance', 
        description: '', 
        genre: 'Non-fiction', 
        rating: 1
)

video8 = Video.create!(
        title: 'Despicable Me', 
        description: '', 
        genre: 'Family', 
        rating: 0
)

video9 = Video.create!(
        title: 'FYRE', 
        description: '', 
        genre: 'Non-fiction', 
        rating: 2
)

video10 = Video.create!(
        title: '6 Underground', 
        description: '', 
        genre: 'Action', 
        rating: 2
)

video11 = Video.create!(
        title: 'Olympus Has Fallen', 
        description: '', 
        genre: 'Action', 
        rating: 4
)

video12 = Video.create!(
        title: 'Bad Boys 2', 
        description: '', 
        genre: 'Action', 
        rating: 5
)

video13 = Video.create!(
        title: 'Tall Girl', 
        description: '', 
        genre: 'Family', 
        rating: 3
)

video14 = Video.create!(
        title: 'The Little Vampire', 
        description: '', 
        genre: 'Family', 
        rating: 3
)

video15 = Video.create!(
        title: 'The Croods', 
        description: '', 
        genre: 'Non-fiction', 
        rating: 3
)

video16 = Video.create!(
        title: 'The Wrong Missy', 
        description: '', 
        genre: 'Comedy', 
        rating: 5
)

video17 = Video.create!(
        title: 'Bird Box', 
        description: '', 
        genre: 'Horror', 
        rating: 4
)

video18 = Video.create!(
        title: 'Insidious', 
        description: '', 
        genre: 'Horror', 
        rating: 3
)

video19 = Video.create!(
        title: 'Carrie', 
        description: '', 
        genre: 'Horror', 
        rating: 4
)

video20 = Video.create!(
        title: 'Lost In Space', 
        description: '', 
        genre: 'Non-fiction', 
        rating: 3
)

video21 = Video.create!(
        title: 'Battle: Los Angeles', 
        description: '', 
        genre: 'Fiction', 
        rating: 3
)
