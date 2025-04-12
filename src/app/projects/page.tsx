import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'

// Mock data for past projects
const pastProjects = [
  {
    id: 7,
    name: 'Sumba',
    description: 'Pengobatan dan penyuluhan kesehatan gigi dan mulut Sumba',
    image: '/images/projects/sumba-oct-2024/sumba.jpg',
    year: '2024',
    date: '23 - 27 Oktober 2024',
    location: 'Sumba, NTT',
    link: '/projects/sumba-2024',
  },
  {
    id: 6,
    name: 'Sumba',
    description: 'Pengobatan kesehatan umum dan gigi Sumba',
    image: '/images/projects/sumba-mar-2024/sumba.jpg',
    year: '2024',
    date: '15 - 24 Maret 2024',
    location: 'Sumba, NTT',
  },
  {
    id: 5,
    name: 'Raja Ampat',
    description: 'Pengobatan kesehatan umum dan gigi Raja Ampat',
    image: '/images/projects/raja-ampat-2020/rajaampat.jpg',
    year: '2020',
    date: '18 - 23 Maret 2020',
    location: 'Raja Ampat, Papua Barat',
  },
  {
    id: 4,
    name: 'Bantul',
    description:
      'Pengobatan Gigi + Travel and Teach Special Jogja berkolaborasi dengan @jalinmimpi',
    image: '/images/projects/bantul-2019/bantul.jpg',
    year: '2019',
    date: '22 - 23 November 2019',
    location: 'Bantul, Yogyakarta',
  },
  {
    id: 3,
    name: 'Papanggo',
    description:
      'Pembelajaran komputer & penyuluhan kesehatan gigi berkolaborasi dengan @computerforchange',
    image: '/images/projects/papanggo-2019/papanggo.jpg',
    year: '2019',
    date: '29 September 2019',
    location: 'Papanggo, DKI Jakarta',
  },
  {
    id: 2,
    name: 'Sumba',
    description: 'Pengobatan & penyuluhan kesehatan gigi dan mulut di Sumba',
    image: '/images/projects/sumba-2019/sumba.jpg',
    year: '2019',
    date: '24 - 28 Juli 2019',
    location: 'Sumba, NTT',
  },
  {
    id: 1,
    name: 'Maumere',
    description: 'Pengobatan & penyuluhan kesehatan gigi dan mulut di Flores',
    image: '/images/projects/maumere-2018/maumere.jpg',
    year: '2018',
    date: '25 - 30 November 2018',
    location: 'Maumere, Flores, NTT',
  },
]

export default function Projects() {
  return (
    <>
      <Header />
      <main>
        <section
          id="header"
          className="relative overflow-hidden pb-16 pt-6 lg:py-20"
        >
          <Container className="relative">
            <div className="max-w-2xl text-center md:mx-auto xl:max-w-none">
              <h2 className="bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text font-display text-3xl tracking-tight text-transparent sm:text-4xl md:text-5xl">
                Kegiatan Kembara Nusa
              </h2>
              <h3 className="mt-2 font-display text-lg tracking-tight text-gray-700">
                Proyek-Proyek Kebanggaan Kami
              </h3>
            </div>
          </Container>
        </section>
        <section id="projects" className="relative overflow-hidden py-8 pb-20">
          <Container className="relative">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {pastProjects.map((project) => {
                // Create card content
                const cardContent = (
                  <>
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200">
                        <Image
                          src={project.image}
                          alt={project.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          fill
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 bg-gradient-to-r from-blue-600 to-red-500 px-4 py-2 text-sm font-semibold text-white">
                        {project.year}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 font-display text-xl font-semibold text-gray-900">
                        {project.name}
                      </h3>
                      <p className="mb-4 text-gray-600">
                        {project.description}
                      </p>
                      <div className="mb-2 flex items-center text-sm text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {project.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {project.location}
                      </div>
                      {project.link && (
                        <div className="mt-4 text-right">
                          <span className="text-sm font-medium text-blue-600">
                            Selengkapnya
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="ml-1 inline h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </span>
                        </div>
                      )}
                    </div>
                  </>
                )

                // Render card - either as a link or a div depending on whether link is available
                return (
                  <div
                    key={project.id}
                    className={`group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all `}
                  >
                    {project.link ? (
                      <Link
                        href={project.link}
                        className="block h-full cursor-pointer"
                      >
                        {cardContent}
                      </Link>
                    ) : (
                      cardContent
                    )}
                  </div>
                )
              })}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
