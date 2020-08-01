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
