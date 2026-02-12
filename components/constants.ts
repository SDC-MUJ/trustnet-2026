export const menu = [
    {
        id: 0,
        label: 'Home',
        link: '/',
        newTab: false,
    },
    // {
    //     id: 1,
    //     label: 'About',
    //     link: '/#Introduction',
    //     newTab: false,
    // },
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
    // {
    //     id: 7,
    //     label: 'Important Links',
    //     link: '#',
    //     dropdownItems: [
    //         {
    //             id: 'reviewer-details',
    //             label: 'Form for reviewer details',
    //             link: 'https://forms.gle/RJaeQfVdSoHR5mzc8',
    //             newTab: true,
    //         },
    //         {
    //             id: 'special-session',
    //             label: 'Special Session Proposal',
    //             link: '/special-session',
    //         },
    //     ],
    // },
    {
        id: 7,
        label: 'Special Sessions',
        link: '/special-sessions',
        dropdownItems: [
            {
                id: 'special-sessions',
                label: 'Special Sessions',
                link: '/special-sessions',
            },
            {
                id: 'special-session-proposal',
                label: 'Special Session Proposal',
                link: '/special-session-proposal',
            },
        ],
    },
]

export const scheduleDropdown = [
    {
        id: 'schedule-02',
        label: 'Inaugural Ceremony',
        link: '/schedule/schedule-02.pdf',
        newTab: true,
    },
    {
        id: 'schedule-01',
        label: 'Program Schedule',
        link: '/schedule/schedule-01.pdf',
        newTab: true,
    },
    {
        id: 'schedule-03',
        label: 'Paper Presentation',
        link: '/schedule/schedule-03.pdf',
        newTab: true,
    },
]

export const speakers = [
    {
        id: 1,
        fullName: 'Dr. Anupam Tiwari',
        des: 'Principal Advisor, Ministry of Defence, Government of India',
        profileimage: '/images/speakers/anupam-tiwari.png',
        // linkedin: '#',
        website: '#'
    },
    {
        id: 2,
        fullName: 'Dr. Somanath Tripathy',
        des: 'Department of Computer Science & Engineering, IIT Patna',
        profileimage: '/images/speakers/somanath-tripathy.png',
        website: 'https://www.iitp.ac.in/~som/'
    },
    {
        id: 3,
        fullName: 'Dr. Mano Manoharan',
        des: 'Senior Lecturer, Computer Science, University Of Auckland',
        profileimage: '/images/speakers/mano-manoharan.jpeg',
        website: 'https://profiles.auckland.ac.nz/mano-manoharan',
    },
    {
        id: 4,
        fullName: 'Dr. Gang Li',
        des: 'Professor, Deakin University, School of Information Technology',
        profileimage: '/images/speakers/gang-li.png',
        website: 'https://scholar.google.com.au/citations?user=dqwjm-0AAAAJ&hl=en',
        linkedin: 'https://www.linkedin.com/in/ligang/'
    },
    {
        id: 5,
        fullName: 'Dr. Maanak Gupta',
        des: 'Department of Computer Science, Tennessee Tech University, TN, USA',
        profileimage: '/images/speakers/maanak-gupta.png',
        website: 'https://www.tntech.edu/directory/engineering/faculty/maanak-gupta.php'
    },
    {
        id: 6,
        fullName: 'Dr. Chhagan Lal',
        des: 'Cybersecurity Researcher, CISaR Group, NTNU | EU CYBERUNITY Project',
        profileimage: '/images/speakers/chhagan-lal.jpg',
        website: 'https://www.ntnu.edu/employees/chhagan.lal'
    },
    {
        id: 7,
        fullName: 'Apurva K Vangujar',
        des: 'Cyber Security Engineer, Jaguar Land Rover',
        profileimage: '/images/speakers/apurva.png',
        linkedin: 'https://ie.linkedin.com/in/apurva-k-vangujar-a36a627b',
    },
    {
        id: 8,
        fullName: 'Shiva Kumara',
        des: 'Principal Architect, Cybersecurity, T-Mobile USA, Inc',
        profileimage: '/images/speakers/shiva-kumara.png',
        linkedin: 'https://www.linkedin.com/in/shiva-kumara-cybersecurity/',
    },
    {
        id: 9,
        fullName: 'Mohamed Nawas',
        des: 'Digital Transformation & Compliance Strategist at National Bank of Kuwait',
        profileimage: '/images/speakers/mohamed-nawas.png',
        linkedin: 'https://www.linkedin.com/in/mohamed-nawas-1b043ab/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
        id: 10,
        fullName: 'Henry Cyril',
        des: 'Principal Engineer at T-Mobile USA',
        profileimage: '/images/speakers/henry-cyril.png',
        linkedin: 'https://www.linkedin.com/in/henrypradeep/',
    },
    {
        id: 11,
        fullName: 'Dileep Somajohassula',
        des: 'Senior Software Engineer at SS & C Technologies',
        profileimage: '/images/speakers/dileep.png',
        linkedin: 'https://www.linkedin.com/in/dileep-somajohassula-a20bb32b/',
    },
    {
        id: 12,
        fullName: 'Bright Ojo',
        des: 'FNIPES, Texas, USA ',
        profileimage: '/images/speakers/bright-ojo.png',
        linkedin: 'https://www.linkedin.com/in/bright-ojo-fnipes-719047244/',
    },
    {
        id: 13,
        fullName: 'Murali Grandhi ',
        des: 'Data & Analytics Senior Lead at Microsoft, Texas USA',
        profileimage: '/images/speakers/murali-gandhi.png',
        linkedin: 'https://www.linkedin.com/in/mgrandhi',
    },
    // {
    //     id: 2,
    //     fullName: 'Rajat Mittal ',
    //     des: 'Associate Professor, IIT Kanpur',
    //     profileimage: '/images/speakers/rajat-mittal.png',
    //     linkedin: '',
    //     website: 'https://www.cse.iitk.ac.in/users/rmittal/'
    // },
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
            id: 8,
            name: 'Prof. Dr. Neha Chaudhary',
            des: 'Professor & HoD, CSE',
            role: 'Program Chair',
            picture: '/images/committee/Neha-Chaudhary.jpeg',
        },
        {
            id: 9,
            name: 'Dr. U. S. Rawat',
            des: 'Professor',
            role: 'Program Co-Chair',
            picture: '/images/committee/us-rawat.jpg',
        },
        {
            id: 10,
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
            id: 12,
            name: 'Dr. Amit Garg',
            des: 'Associate Professor, CSE',
            role: 'Organizing Chair',
            picture: '/images/committee/amit-garg.jpeg',
        },
        {
            id: 13,
            name: 'Dr. Ankur Pandey',
            des: 'Assistant Professor, CSE',
            role: 'Organizing Chair',
            picture: '/images/committee/ankur-pandey.jpg',
        },
        // {
        //     id: 14,
        //     name: 'Dr. Amit Kumar Gupta',
        //     des: 'Assistant Professor, CSE',
        //     role: 'Organizing Co-Chair',
        //     picture: '/images/committee/amit-kumar-gupta.jpg',
        // },
        {
            id: 15,
            name: 'Dr. Neetu Gupta',
            des: 'Assistant Professor, CSE',
            role: 'Organizing Co-Chair',
            picture: '/images/committee/neetu-gupta.jpg',
        },
        {
            id: 16,
            name: 'Dr. Sayar Singh Shekhawat',
            des: 'Associate Professor, CSE',
            role: 'Publicity Chair',
            picture: '/images/committee/sayar-singh.jpg',
        },
        {
            id: 17,
            name: 'Dr. Usha Jain',
            des: 'Assistant Professor, CSE',
            role: 'Publicity Chair',
            picture: '/images/committee/usha-jain.jpg',
        },
        {
            id: 18,
            name: 'Dr. Surbhi Sharma',
            des: 'Assistant Professor, CSE',
            role: 'Publicity Chair',
            picture: '/images/committee/surbhi-sharma.jpeg',
        },
        {
            id: 19,
            name: 'Dr. Satpal Singh Kushwaha',
            des: 'Assistant Professor, CSE',
            role: 'Technical Chair',
            picture: '/images/committee/satpal-singh-kushwaha.jpg',
        },
        {
            id: 20,
            name: 'Dr. Lokesh Sharma',
            des: 'Associate Professor, IT',
            role: 'Technical Chair',
            picture: '/images/committee/lokesh-sharma.jpg',
        },
        {
            id: 21,
            name: 'Dr. Sumit Srivastava',
            des: 'Assistant Professor, IT',
            role: 'Technical Chair',
            picture: '/images/committee/sumit-srivastava.jpg',
        },
        {
            id: 22,
            name: 'Dr. Rishi Gupta',
            des: 'Associate Professor, CSE',
            role: 'Finance Chair',
            picture: '/images/committee/rishi-gupta.jpg',
        },
        {
            id: 23,
            name: 'Dr. Akshay Jadhav',
            des: 'Assistant Professor, CSE',
            role: 'Publication Chair',
            picture: '/images/committee/akshay-jadhav.jpg',
        },
        {
            id: 24,
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

export const updatedOrganizingCommitteeGroups = [
    {
        role: 'Liaisoning Officer Dr. Anupam Tiwari',
        members: ['Dr Manish Gupta'],
    },
    {
        role: 'Liaisoning Officer Dr Manak Gupta',
        members: ['Dr. Madhu Sharma'],
    },
    {
        role: 'Liaisoning Officer Dr. Somnath Tripathi',
        members: ['Dr Dibakar Sinha'],
    },
    {
        role: 'Liaisoning Officer Dr. Manu Manoharan',
        members: ['Dr Rishi Shrivastava'],
    },
    {
        role: 'Finance Committee',
        members: [
            'Dr. Rishi Gupta (Coordinator)',
            'Dr. Amit Kumar Gupta',
            'Dr. Ashok Kumar Saini',
        ],
    },
    {
        role: 'Registration Committee',
        members: [
            'Dr. Bali Devi (Coordinator)',
            'Ms. Babita Tiwari (Coordinator)',
            'Ms. Tripti Kulshrestha',
            'Dr. Kuntal Gaur',
            'Dr. Prashant Vats',
            'Dr. Sushama',
        ],
    },
    {
        role: 'Stage Management',
        members: [
            'Dr. Anita Shrotriya (Coordinator)',
            'Dr Nandini Babbar',
            'Ms. Shweta Sharma',
            'Dr. Susheela Vishnoi',
            'Dr. Rishi Kumar Srivastva',
        ],
    },
    {
        role: 'Food Committee',
        members: [
            'Mr. Lav Upadhyay (Coordinator)',
            'Ms. Surbhi Syal',
            'Ms. Neha Singh',
            'Dr. Pradeep Kumar',
            'Dr. Venkatesh Gauri Shankar (Coordinator)',
            'Mr. Anil Kumar',
        ],
    },
    {
        role: 'Keynote Session Moderator & Pannel Discussion',
        members: [
            'Dr. Riddhi Arora (Coordinator)',
            'Dr. Amandeep Cheema',
            'Ms. Gunjan Pathak',
        ],
    },
    {
        role: 'Networking Diner Management',
        members: [
            'Dr. Shishir Singh Chauhan (Coordinator)',
            'Mr. Bhawani Singh Rathore',
        ],
    },
    {
        role: 'Print Media',
        members: ['Dr. Sayar Singh Shekhawat (Coordinator)', 'Dr. Vaishali Chauhan'],
    },
    {
        role: 'Publication committee',
        members: ['Dr. Akshay Jadhav (Coordinator)', 'Dr. Mayank Namdev (Coordinator)'],
    },
    {
        role: 'Technical Session Management (Online/Offline) Session Moderator',
        members: [
            'Dr. Satpal Singh Kushwaha (Coordinator)',
            'Dr. Tarun Jain (Coordinator)',
            'Dr. Aditya Sinha (Coordinator)',
            'Dr. Ajay Kumar',
            'Dr. Arpita Baronia',
            'Dr. Pallavi',
            'Ms. Vaishali Chauhan',
            'Dr Manish Gupta',
            'Dr. Abhishek Dwivedi',
            'Dr. Divya Thakur',
            'Dr. Onkar Singh',
            'Dr. Girish Sharma',
            'Dr. Tapan Kumar Dey',
            'Dr. Aditya Narayan Hati',
            'Mr. Ravinder Kumar',
            'Dr. Madhu Sharma',
        ],
    },
    {
        role: 'Souvenir',
        members: [
            'Dr. Sakshi Shringi (Coordinator)',
            'Dr. Usha Jain',
            'Dr. Surbhi Sharma',
            'Ms. Soni Gupta',
        ],
    },
    {
        role: 'Transportation and Accommodation',
        members: [
            'Mr. Harish Sharma (Coordinator)',
            'Mr. Abhay Singh Bisht (Coordinator)',
            'Dr. Shivendra Dubey',
        ],
    },
    {
        role: 'Web & IT Support Committee',
        members: ['Dr. Ajit Noonia (Coordinator)', 'Dr. Dibakar Sinha'],
    },
    // {
    //     role: 'Student Volunteer',
    //     members: [
    //         'Samaksh Gupta (Coordinator)',
    //         'Aryan Verma (Coordinator)',
    //         'Tiya Chhabra (Coordinator)',
    //         'Satya Agrawal (Coordinator)',
    //         'Parv Rangbulla',
    //         'Harshit Attri',
    //         'Kshitij Verma',
    //         'Tamanna Yadav',
    //         'Mehul Bhardwaj',
    //         'Krishna Goel',
    //         'Gayathri Ravindran',
    //         'Yashi Gupta',
    //     ],
    // },
]
