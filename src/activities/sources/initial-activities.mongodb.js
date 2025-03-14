// MongoDB Playground
use("vibra");

// Create emotions collection if it doesn't exist
db.createCollection("activities");

// Clear existing data to avoid duplicates
db.activities.deleteMany({});
// Define the initial activities data

const activitiesData = [
    {
        id: '1',
        emotion: new ObjectId('67d22641649286446e0e8477'),
        title: 'Felicidad',
        resources: [
            {
                type: 'video',
                url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                duration: 300,
                metadata: {
                    author: 'Jane Doe',
                    language: 'English'
                }
            },
            {
                type: 'video',
                url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/DesigningForGoogleCastVideo.mp4',
                duration: 300,
                metadata: {
                    author: 'Yovany Maya',
                    language: 'Spanish'
                }
            },
            {
                type: 'video',
                url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                duration: 300,
                metadata: {
                    author: 'Andre Luiz Suarez Silva',
                    language: 'Spanish'
                }
            }
        ],
        questions: [
            {
                questionText: '¿Cual es el motivo que mas te llena de felicidad el dia de hoy?',
                type: 'open',
                points: 10
            },
            {
                questionText: '¿Cómo afecta la gratitud a tu estado de ánimo?',
                type: 'multiple',
                options: ['Muy positivamente', 'Algo positivo', 'Sin efecto', 'Negativamente'],
                correctAnswer: 'Muy positivamente',
                points: 5
            },
            {
                questionText: '¿Crees que las emociones se pueden desarrollar?',
                type: 'multiple',
                options: ['Es posible', 'Absolutamente Si', 'Definitivamente No'],
                correctAnswer: 'Absolutamente Si',
                points: 7
            }
        ],
        difficulty: 1,
        isActive: true,
        schedule: {
            date: new Date('2025-03-12'),
            weekNumber: 2,
            year: 2025
        },
        createdAt: new Date('2025-03-13T12:00:00Z')
    },
    {
        id: '2',
        emotion: new ObjectId('67d22641649286446e0e8478'),
        title: 'Tristeza',
        resources: [
            {
                type: 'audio',
                url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                duration: 600,
                metadata: {
                    technique: '4-7-8 breathing',
                    background: 'ocean waves'
                }
            }
        ],
        questions: [
            {
                questionText: 'How do you feel after the exercise?',
                type: 'multiple',
                options: ['Very Relaxed', 'Somewhat Relaxed', 'No Change', 'More Tense'],
                correctAnswer: 'Very Relaxed',
                points: 5
            }
        ],
        difficulty: 2,
        isActive: true,
        schedule: {
            date: new Date('2025-03-12'),
            weekNumber: 2,
            year: 2025
        },
        createdAt: new Date('2025-03-14T12:00:00Z')
    },
    {
        id: '3',
        emotion: new ObjectId('67d22641649286446e0e847b'),
        title: 'Ansiedad',
        resources: [
            {
                type: 'video',
                url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                duration: 450,
                metadata: {
                    category: 'self-care',
                    intensity: 'moderate'
                }
            }
        ],
        questions: [
            {
                questionText: 'What\'s the most important thing you need to do today?',
                type: 'open',
                points: 10
            },
            {
                questionText: 'Which activity resonated with you the most?',
                type: 'open',
                points: 10
            }
        ],
        difficulty: 3,
        isActive: true,
        schedule: {
            date: new Date('2025-03-12'),
            weekNumber: 2,
            year: 2025
        },
        createdAt: new Date('2025-03-15T12:00:00Z')
    }
];

// Insert the activities
try {
    const result = db.activities.insertMany(activitiesData);
    print(`Successfully inserted ${result.insertedCount} activities`);
} catch (error) {
    print(`Error inserting activities: ${error.message}`);
}

// Verify insertion
const count = db.activities.countDocuments();
print(`Total activities in database: ${count}`);