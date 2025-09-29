export const menu = [
    {
        id: 0,
        label: 'Home',
        link: '/',
        newTab: false,
    },
    {
        id: 1,
        label: 'About',
        link: '/#Introduction',
        newTab: false,
    },
    {
        id: 4,
        label: 'Call for Papers',
        link: '/call-for-papers',
        newTab: false,
    },
    {
        id: 2,
        label: 'Speakers',
        link: '/#Speakers',
        newTab: false,
    },
    // {
    //     id: 3,
    //     label: 'Schedule',
    //     link: '/#Schedule',
    //     newTab: false,
    // },
    {
        id: 4,
        label: 'Committee',
        link: '#',
        dropdownItems: [
            {
                id: 'advisory',
                label: 'Advisory Board',
                link: '/advisory-board',
            },
            {
                id: 'organizing',
                label: 'Organizing Committee',
                link: '/organizing-committee',
            },
        ],
    },
    {
        id: 5,
        label: 'For Authors',
        link: '#',
        dropdownItems: [
            {
                id: 'guidelines',
                label: 'Guidelines for Authors',
                link: '/author-guidelines',
            },
            {
                id: 'submission',
                label: 'Paper Submission',
                link: 'https://cmt3.research.microsoft.com/TrustNet2026',
                newTab: true,
            },
            {
                id: 'registration',
                label: 'Registration',
                link: '/registration',
            },
            {
                id: 'brochure',
                label: 'Conference Brochure',
                link: '/brochure/trustnet-brochure.pdf',
                download: 'trustnet-brochure.pdf'
            },
        ],
    },
    {
        id: 6,
        label: 'Contact',
        link: '#footer', // Changed from '/#Contact'
        newTab: false,
    },
    {
        id: 7,
        label: 'Important Links',
        link: '#',
        dropdownItems: [
            {
                id: 'reviewer-details',
                label: 'Form for reviewer details',
                link: '/#',
            },
            {
                id: 'special-session',
                label: 'Special Session Proposal',
                link: '/special-session',
            },
        ],
    },
]

export const speakers = [
    {
        id: 1,
        fullName: 'Dr. Anupam Tiwari',
        des: 'Cyber Advisor , Ministry of Defence , Government of India',
        profileimage: '/images/speakers/anupam-tiwari.png',
        linkedin: '#',
        website: '#'
    },
    {
        id: 2,
        fullName: 'Rajat Mittal ',
        des: 'Associate Professor, IIT Kanpur',
        profileimage: '/images/speakers/rajat-mittal.png',
        linkedin: '',
        website: 'https://www.cse.iitk.ac.in/users/rmittal/'
    },
];

export const committee = {
    main: [
        {
            id: 1,
            name: 'Mr. S. Vaitheeswaran',
            des: 'Chairperson',
            role: 'Chief Patron',
            picture: '/images/committee/S-Vaitheeswaran.jpg',
        },
        {
            id: 2,
            name: 'Prof. Dr. N. N. Sharma',
            des: 'President',
            role: 'Patron',
            picture: '/images/committee/dr-nnsharma.jpg',
        },
        {
            id: 3,
            name: 'Dr. Karunakar A Kotegar',
            des: 'Pro-President',
            role: 'Co-Patron',
            picture: '/images/committee/karunakar-1.jpg',
        },
        {
            id: 4,
            name: 'Dr. Amit Soni',
            des: 'Registrar',
            role: 'Co-Patron',
            picture: '/images/committee/amit-soni.jpg',
        },
        {
            id: 5,
            name: 'Prof. Nitu Bhatnagar',
            des: 'Provost',
            role: 'Co-Patron',
            picture: '/images/committee/Nitu-Bhatnagar.jpg',
        },
        {
            id: 6,
            name: 'Prof. Dr. Kuldip Singh Sangwan',
            des: 'Dean – Faculty of Engineering',
            role: 'General Chair',
            picture: '/images/committee/Dr-Kuldip-Singh.jpg',
        },
        {
            id: 7,
            name: 'Dr. Chhatar Singh Lamba',
            des: 'Professor & Associate Dean',
            role: 'General Chair',
            picture: '/images/committee/cslamba.jpg',
        },
        // {
        //     id: 8,
        //     name: 'Dr. Sandeep Chaurasia',
        //     des: 'Director, Placement',
        //     role: 'General Co-Chair',
        //     picture: '/images/committee/sandeep-chaurasia.jpg',
        // },
        {
            id: 10,
            name: 'Prof. Dr. Neha Chaudhary',
            des: 'Professor & HoD, CSE',
            role: 'Program Chair',
            picture: '/images/committee/Neha-Chaudhary.jpeg',
        },
        {
            id: 10,
            name: 'Dr. U. S. Rawat',
            des: 'Professor',
            role: 'Program Co-Chair',
            picture: '/images/committee/us-rawat.jpg',
        },
        {
            id: 9,
            name: 'Dr. Satyabrata Roy',
            des: 'Associate Professor, CSE',
            role: 'Program Co-chair',
            picture: '/images/committee/Dr-Satyabrata-Roy.jpg',
        },
        {
            id: 11,
            name: 'Dr. Mahesh Jangid',
            des: 'Associate Professor, CSE',
            role: 'Program Co-Chair',
            picture: '/images/committee/Mahesh-Jangid.jpg',
        },
        {
            id: 10,
            name: 'Dr. Amit Garg',
            des: 'Associate Professor, CSE',
            role: 'Organizing Chair',
            picture: '/images/committee/amit-garg.jpeg',
        },
        {
            id: 10,
            name: 'Dr. Ankur Pandey',
            des: 'Assistant Professor, CSE',
            role: 'Organizing Chair',
            picture: '/images/committee/ankur-pandey.jpg',
        },
        {
            id: 10,
            name: 'Dr. Amit Kumar Gupta',
            des: 'Assistant Professor, CSE',
            role: 'Organizing Co-Chair',
            picture: '/images/committee/amit-kumar-gupta.jpg',
        },
        {
            id: 10,
            name: 'Dr. Neetu Gupta',
            des: 'Assistant Professor, CSE',
            role: 'Organizing Co-Chair',
            picture: '/images/committee/neetu-gupta.jpg',
        },
        {
            id: 10,
            name: 'Dr. Sayar Singh Shekhawat',
            des: 'Associate Professor, CSE',
            role: 'Publicity Chair',
            picture: '/images/committee/sayar-singh.jpg',
        },
        {
            id: 10,
            name: 'Dr. Satpal Singh Kushwaha',
            des: 'Assistant Professor, CSE',
            role: 'Technical Chair',
            picture: '/images/committee/satpal-singh-kushwaha.jpg',
        },
        {
            id: 10,
            name: 'Dr. Rishi Gupta',
            des: 'Associate Professor, CSE',
            role: 'Finance Chair',
            picture: '/images/committee/rishi-gupta.jpg',
        },
        {
            id: 10,
            name: 'Dr. Akshay Jadhav',
            des: 'Assistant Professor, CSE',
            role: 'Publication Chair',
            picture: '/images/committee/akshay-jadhav.jpg',
        },
        {
            id: 10,
            name: 'Dr. Mayank Namdev',
            des: 'Assistant Professor, CSE',
            role: 'Publication Chair',
            picture: '/images/committee/mayank-namdev.jpg',
        },
    ],
    technical: [
        {
            id: 1,
            name: 'Dr Satyabrata Roy',
            dept: 'Department of CSE',
        },
        {
            id: 2,
            name: 'Dr Amit Garg',
            dept: 'Department of CSE',
        },
        {
            id: 3,
            name: 'Dr Ankur Pandey',
            dept: 'Department of CSE',
        },
        {
            id: 4,
            name: 'Mr Tarun Jain',
            dept: 'Department of CSE',
        },
        {
            id: 5,
            name: 'Dr Neelam Chaplot',
            dept: 'Department of CSE',
        },
    ],
    finance: [
        {
            id: 1,
            name: 'Dr Amit Kumar Gupta',
            dept: 'Department of CSE',
        },
        {
            id: 2,
            name: 'Ms. Anita Shotriya',
            dept: 'Department of CSE',
        },
    ],
    travel: [
        {
            id: 1,
            name: 'Dr Ajit Noonia',
            dept: 'Department of CSE',
        },
        {
            id: 2,
            name: 'Dr Mayank Namdev',
            dept: 'Department of CSE',
        },
        {
            id: 3,
            name: 'Ms. Babita Tiwari',
            dept: 'Department of CSE',
        },
        {
            id: 4,
            name: 'Dr Vivek Bhardwaj',
            dept: 'Department of AIML',
        },
    ],
    stage: [
        {
            id: 1,
            name: 'Ms. Anita Shotriya',
            dept: 'Department of CSE',
        },
        {
            id: 2,
            name: 'Dr Ginika Mahajan',
            dept: 'Department of Data Science',
        },
        {
            id: 3,
            name: 'Mr. Harish Sharma',
            dept: 'Department of AIML',
        },
        {
            id: 4,
            name: 'Ms. Vipasha Sharma',
            dept: 'Department of CSE',
        },
        {
            id: 5,
            name: 'Ms. Ishita Nainwal',
            dept: 'Department of CSE',
        },
        {
            id: 6,
            name: 'Ms. Sushama',
            dept: 'Department of CSE',
        },
        {
            id: 7,
            name: 'Mr. Mayank Jain',
            dept: 'Department of CSE',
        },
    ],
    printing: [
        {
            id: 1,
            name: 'Dr Amit Kumar Bairwa',
            dept: 'Department of AIML',
        },
        {
            id: 2,
            name: 'Ms. Kirti Paliwal',
            dept: 'Department of CSE',
        },
        {
            id: 3,
            name: 'Dr Vaishali Chauhan',
            dept: 'Department of CSE',
        },
        {
            id: 4,
            name: 'Dr Atul Kumar Verma',
            dept: 'Department of CSE',
        },
        {
            id: 5,
            name: 'Dr Pallavi',
            dept: 'Department of CSE',
        },
        {
            id: 6,
            name: 'Dr Shikha Mundra',
            dept: 'Department of CSE',
        },
        {
            id: 7,
            name: 'Dr Vivek Kumar',
            dept: 'Department of CSE',
        },
    ],
    food: [
        {
            id: 1,
            name: 'Mr. Venkatesh Gauri Shankar',
            dept: 'Department of IT',
        },
        {
            id: 2,
            name: 'Dr Aditya Sinha',
            dept: 'Department of CSE',
        },
        {
            id: 3,
            name: 'Mr. Tarun Jain',
            dept: 'Department of CSE',
        },
        {
            id: 4,
            name: 'Mr. Lav Upadhyay',
            dept: 'Department of CSE',
        },
        {
            id: 5,
            name: 'Mr. Vivek Sharma',
            dept: 'Department of CSE',
        },
        {
            id: 6,
            name: 'Dr Anil Kumar',
            dept: 'Department of CSE',
        },
        {
            id: 7,
            name: 'Dr Nishant Jain',
            dept: 'Department of CSE',
        },
    ],
    social: [
        {
            id: 1,
            name: 'Dr Juhi Singh',
            dept: 'Department of CSE',
        },
        {
            id: 2,
            name: 'Ms. Santoshi Rudrakar',
            dept: 'Department of CSE',
        },
    ],
    liaison: [
        {
            id: 1,
            name: 'Dr Satpal Singh Kushwaha',
            dept: 'Department of CSE',
        },
        {
            id: 2,
            name: 'Dr Varun Tiwari',
            dept: 'Department of AIML',
        },
        {
            id: 3,
            name: 'Dr Puneet Mittal',
            dept: 'Department of AIML',
        },
        {
            id: 4,
            name: 'Dr Yadvendra Pratap',
            dept: 'Department of AIML',
        },
        {
            id: 5,
            name: 'Dr Arun Poonia',
            dept: 'FOA, Language',
        },
        {
            id: 6,
            name: 'Dr Ajay Kumar',
            dept: 'Department of CSE',
        },
        {
            id: 7,
            name: 'Dr Surendra Solanki',
            dept: 'Department of AIML',
        },
        {
            id: 8,
            name: 'Mr. Siddharth Kumar',
            dept: 'Department of AIML',
        },
        {
            id: 9,
            name: 'Mr. Prashant Hemrajani',
            dept: 'Department of AIML',
        },
        {
            id: 10,
            name: 'Dr Akshay Jadav',
            dept: 'Department of CSE',
        },
        {
            id: 11,
            name: 'Dr Saurabh Singh Verma',
            dept: 'Department of CCE',
        },
        {
            id: 12,
            name: 'Ms. Sri Geetha M',
            dept: 'Department of AIML',
        },
        {
            id: 13,
            name: 'Dr Shikha Mundra',
            dept: 'Department of CSE',
        },
        {
            id: 14,
            name: 'Dr Abhay Sharma',
            dept: 'Department of IoT',
        },
        {
            id: 15,
            name: 'Mr. Aditya Hathi',
            dept: 'Department of CCE',
        },
        {
            id: 16,
            name: 'Ms. Babita Tiwari',
            dept: 'Department of CSE',
        },
    ],
    print: [
        {
            id: 1,
            name: 'Dr Sayar Singh Shekhawat',
            dept: 'Department of CSE',
        },
        {
            id: 2,
            name: 'Dr Prakash Ramani',
            dept: 'Department of CSE',
        },
        {
            id: 3,
            name: 'Dr Surbhi Sharma',
            dept: 'Department of CSE',
        },
    ],
    Souvenir: [
        {
            id: 1,
            name: 'Dr Deepak Panwar',
            dept: 'Department of AIML',
        },
        {
            id: 2,
            name: 'Dr Neha Janu',
            dept: 'Department of CSE',
        },
        {
            id: 3,
            name: 'Ms. Anjali Yadav',
            dept: 'Department of CSE',
        },
        {
            id: 4,
            name: 'Dr Rahul Saxena',
            dept: 'Department of IT',
        },
    ],
    web: [
        {
            id: 1,
            name: 'Dr Amit Garg',
            dept: 'Department of CSE',
        },
        {
            id: 2,
            name: 'Ms. Smaranika Mohapatra',
            dept: 'Department of IT',
        },
    ],
    local: [
        {
            id: 1,
            name: 'Dr Puneet Mittal',
            dept: 'Department of AIML',
        },
        {
            id: 2,
            name: 'Dr Praneet Saurabh',
            dept: 'Department of CSE',
        },
        {
            id: 3,
            name: 'Dr Anand Pandey',
            dept: 'Department of Mechanical Engineering',
        },
        {
            id: 4,
            name: 'Dr Dalip Singh',
            dept: 'Department of Mechanical Engineering',
        },
        {
            id: 5,
            name: 'Mr Jaydeep Kishore',
            dept: 'Department of AIML',
        },
        {
            id: 6,
            name: 'Dr Jayakishan V',
            dept: 'Department of CSE',
        },
        {
            id: 7,
            name: 'Mr. Sanjay Kumar Tehariya',
            dept: 'Department of AIML',
        },
        {
            id: 8,
            name: 'Mr. Rohit Singh',
            dept: 'Department of IoT',
        },
        {
            id: 9,
            name: 'Ms. Nandini Babbar',
            dept: 'Department of IoT',
        },
    ],
    cultural: [
        {
            id: 1,
            name: 'Dr Arun Kumar Poonia',
            dept: 'Department of Arts',
        },
        {
            id: 2,
            name: 'Divya Thakur',
            dept: 'Department of CSE',
        },
        {
            id: 3,
            name: 'Neha Singh',
            dept: 'Department of CSE',
        },
    ],
    registration: [
        {
            id: 1,
            name: 'Dr Kusum Lata Jain',
            dept: 'Department of CCE',
        },
        {
            id: 2,
            name: 'Ms. Bali Devi',
            dept: 'Department of CSE',
        },
        {
            id: 3,
            name: 'Dr Sushila Bishnoi',
            dept: 'Department of CSE',
        },
        {
            id: 4,
            name: 'Ms. Smarnika Mahapatra',
            dept: 'Department of IT',
        },
        {
            id: 5,
            name: 'Prashant Vats',
            dept: 'Department of CSE',
        },
    ],
}