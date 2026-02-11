import React from 'react'
import { committee, updatedOrganizingCommitteeGroups } from '@/components/constants'
import CommitteeCard from './CommitteeCard'

const technicalProgrammeCommittee: [string, string][] = [
    ['Saradindu Panda', 'Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex, JIS Group, Kolkata, India'],
    ['Dharam Singh', 'Namibia University of Science and Technology, Namibia'],
    ['Nilanjan Dey', 'Techno International New Town, Kolkata, India'],
    ['Ramesh Chandra', 'Christ (Deemed to be University), Bengaluru, India'],
    ['Yudhvir Singh', 'UIET, Maharshi Dayanand University, Rohtak, India'],
    ['Rishipal Singh', 'Guru Jambheshwar University of Science and Technology, Hisar, India'],
    ['Shailendra Tiwari', 'Thapar Institute of Engineering & Technology, Patiala, India'],
    ['Bhabani Shankar Prasad Mishra', 'Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar, India'],
    ['Amit Joshi', 'Director, Global Knowledge Research Foundation, Ahmedabad, India'],
    ['Prasenjit Chatterjee', 'MCKV Institute of Engineering, WB, India'],
    ['Sandeep Joshi', 'Manipal University Jaipur, India'],
    ['Tanupriya Choudhury', 'UPES Dehradun, India'],
    ['Shivendra Shivani', 'Thapar Institute of Engineering & Technology, Patiala, India'],
    ['Manju Khurana', 'Thapar Institute of Engineering & Technology, Patiala, India'],
    ['Anju Yadav', 'Manipal University Jaipur, India'],
    ['Nitesh Pradhan', 'The LNM Institute of Information Technology, Jaipur, India'],
    ['Aditya Sinha', 'Manipal University Jaipur, India'],
    ['Sandeep Kumar Sharma', 'Manipal University Jaipur, India'],
    ['Ashok Kumar Yadav', 'Amity School of Engineering and Technology, Noida, India'],
    ['Ajay Kumar', 'Manipal University Jaipur, India'],
    ['Manmohan Sharma', 'Manipal University Jaipur, India'],
    ['Varun Tiwari', 'Manipal University Jaipur, India'],
    ['Sakshi Shringi', 'Manipal University Jaipur, India'],
    ['Arjun Singh', 'Manipal University Jaipur, India'],
    ['Sunil Kumar', 'Galgotias University, Greater Noida, India'],
    ['Supreet Kaur Sahi', 'Sri Guru Tegh Bahadur Institute of Management & Information Technology, Delhi, India'],
    ['Harshita Tuli', 'Sri Guru Tegh Bahadur Institute of Management & Information Technology, Delhi, India'],
    ['Ajit Noonia', 'Manipal University Jaipur, India'],
    ['Sumit Dhariwal', 'Manipal University Jaipur, India'],
    ['Hemlata Goyal', 'Manipal University Jaipur, India'],
    ['Ashish Kumar', 'Manipal University Jaipur, India'],
    ['Venkatesh Gauri Shankar', 'Manipal University Jaipur, India'],
    ['Monika Saini', 'Manipal University Jaipur, India'],
    ['Sunita Singhal', 'Manipal University Jaipur, India'],
    ['Amit Sinhal', 'JKLU, India'],
    ['Sandeep Kumar', 'Christ (Deemed to be University), Bengaluru, India'],
    ['Aprna Tripathi', 'Manipal University Jaipur, India'],
]

const Committee = () => {
    const organizingCoreRoles = new Set([
        'Chief Patron',
        'Patron',
        'Co-Patron',
        'General Chair',
        'Program Chair',
        'Program Co-Chair',
        'Program Co-chair',
        'Organizing Chair',
        'Organizing Co-Chair',
    ])

    const liaisoningMembers = updatedOrganizingCommitteeGroups
        .filter((group) => group.role.toLowerCase().startsWith('liaisoning officer'))
        .flatMap((group) => group.members)

    const nonLiaisoningGroups = updatedOrganizingCommitteeGroups.filter(
        (group) => !group.role.toLowerCase().startsWith('liaisoning officer')
    )

    const committeeGroupsForTable = liaisoningMembers.length > 0
        ? [{ role: 'Liaisoning Officer', members: liaisoningMembers }, ...nonLiaisoningGroups]
        : nonLiaisoningGroups

    return (
        <>
            <div className='px-4 py-12 sm:px-8 md:px-16 md:pb-16 flex flex-col gap-4 justify-center items-center' id='Committee'>
                <div className='flex flex-col justify-center items-center mb-4'>
                    <h2 className='text-xl sm:text-2xl md:text-3xl font-black uppercase'>Organizing Committee</h2>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-1 flex-wrap text-center'>
                    {committee.main
                        .filter((item) => organizingCoreRoles.has(item.role))
                        .map((item) => (
                        <CommitteeCard key={item.id} name={item.name} des={item.des} role={item.role} picture={item.picture} />
                        ))}
                </div>
                <section className='w-full max-w-6xl mt-8'>
                    <div className='w-full overflow-x-auto'>
                        <table className='w-full border border-black border-collapse table-fixed'>
                            <tbody>
                                {committeeGroupsForTable.map((group) => (
                                    <React.Fragment key={group.role}>
                                        {group.members.map((member, memberIndex) => (
                                            <tr key={`${group.role}-${member}-${memberIndex}`} className='odd:bg-white even:bg-gray-50'>
                                                {memberIndex === 0 && (
                                                    <td
                                                        rowSpan={group.members.length}
                                                        className='border border-black px-2 py-2 md:px-4 md:py-3 align-top font-bold text-xs md:text-base bg-gray-50 w-[40%] break-words'
                                                    >
                                                        {group.role}
                                                    </td>
                                                )}
                                                <td className='border border-black px-2 py-2 md:px-4 md:py-3 text-xs md:text-base text-gray-800 break-words'>{member}</td>
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className='w-full max-w-6xl mt-8'>
                    <h3 className='text-2xl md:text-3xl font-bold mb-6 text-center'>Technical Programme Committee</h3>
                    <ul className='list-disc pl-6 space-y-3 text-base md:text-lg text-gray-800'>
                        {technicalProgrammeCommittee.map(([name, affiliation], index) => (
                            <li key={index}>
                                <span className='font-bold'>{name}</span>, {affiliation}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    )
}

export default Committee
