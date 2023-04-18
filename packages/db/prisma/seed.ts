import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const countries = [{
    name: 'Australia',
    code: 'au'
},{
    name: 'Brazil',
    code: 'br'
},
{
    name: 'United States',
    code: 'us'
},
{
    name: 'Hawaii',
    code: 'hawaii'
},
{
    name: 'Italy',
    code: 'it'
},
{
    name: 'South Africa',
    code: 'za'
},
{
    name: 'Indonesia',
    code: 'id'
},
{
    name: 'Japan',
    code: 'jp'
},
{
    name: 'France',
    code: 'fr'
},
{
    name: 'Costa Rica',
    code: 'cr'
},
{
    name: 'Marocco',
    code: 'ma'
},
{
    name: 'Portugal',
    code: 'pt'
},


]

const passedEvents = [{
    order: 1,
    name: 'Billabong Pro Pipeline',
},
{
    order: 2,
    name: 'Hurley Pro Sunset Beach',
},
{
    order: 3,
    name: 'MEO Rip Curl Portugal',
},
{
    order: 4,
    name: 'Rip Curl Pro Bells Beach',
},
{
    order: 5,
    name: 'Margaret River Pro',
}]

const mensResults = [
    {
      "country_code": "br",
      "country_name": "Brazil",
      "Name": "Joao Chianca",
      "event1": "6,085",
      "event2": "6,085",
      "event3": "10,000",
      "event4": "3,320"
    },
    {
      "country_code": "au",
      "country_name": "Australia",
      "Name": "Jack Robinson",
      "event1": "10,000",
      "event2": "6,085",
      "event3": "7,800",
      "event4": "1,330"
    },
    {
      "country_code": "br",
      "country_name": "Brazil",
      "Name": "Filipe Toledo",
      "event1": "4,745",
      "event2": "10,000",
      "event3": "1,330",
      "event4": "6,085"
    },
    {
      "country_code": "au",
      "country_name": "Australia",
      "Name": "Ethan Ewing",
      "event1": "1,330",
      "event2": "4,745",
      "event3": "3,320",
      "event4": "10,000"
    },
    {
      "country_code": "us",
      "country_name": "United States",
      "Name": "Griffin Colapinto",
      "event1": "1,330",
      "event2": "7,800",
      "event3": "4,745",
      "event4": "4,745"
    },
    {
      "country_code": "au",
      "country_name": "Australia",
      "Name": "Ryan Callinan",
      "event1": "3,320",
      "event2": "1,330",
      "event3": "3,320",
      "event4": "7,800"
    },
    {
      "country_code": "br",
      "country_name": "Brazil",
      "Name": "Caio Ibelli",
      "event1": "6,085",
      "event2": "4,745",
      "event3": "3,320",
      "event4": "1,330"
    },
    {
      "country_code": "hawaii",
      "country_name": "Hawaii",
      "Name": "John John Florence",
      "event1": "4,745",
      "event2": "3,320",
      "event3": "1,330",
      "event4": "6,085"
    },
    {
      "country_code": "br",
      "country_name": "Brazil",
      "Name": "Yago Dora",
      "event1": "3,320",
      "event2": "1,330",
      "event3": "6,085",
      "event4": "3,320"
    },
    {
      "country_code": "it",
      "country_name": "Italy",
      "Name": "Leonardo Fioravanti",
      "event1": "7,800",
      "event2": "3,320",
      "event3": "1,330",
      "event4": "1,330"
    },
    {
      "country_code": "br",
      "country_name": "Brazil",
      "Name": "Gabriel Medina",
      "event1": "3,320",
      "event2": "3,320",
      "event3": "3,320",
      "event4": "3,320"
    },
    {
      "country_code": "au",
      "country_name": "Australia",
      "Name": "Connor O'Leary",
      "event1": "1,330",
      "event2": "265",
      "event3": "4,745",
      "event4": "4,745"
    },
    {
      "country_code": "za",
      "country_name": "South Africa",
      "Name": "Matthew McGillivray",
      "event1": "265",
      "event2": "4,745",
      "event3": "1,330",
      "event4": "4,745"
    },
    {
      "country_code": "au",
      "country_name": "Australia",
      "Name": "Callum Robson",
      "event1": "3,320",
      "event2": "1,330",
      "event3": "6,085",
      "event4": "265"
    },
    {
      "country_code": "za",
      "country_name": "South Africa",
      "Name": "Jordy Smith",
      "event1": "4,745",
      "event2": "1,330",
      "event3": "1,330",
      "event4": "3,320"
    },
    {
      "country_code": "id",
      "country_name": "Indonesia",
      "Name": "Rio Waida",
      "event1": "3,320",
      "event2": "1,330",
      "event3": "4,745",
      "event4": "265"
    },
    {
      "country_code": "br",
      "country_name": "Brazil",
      "Name": "Italo Ferreira",
      "event1": "1,330",
      "event2": "3,320",
      "event3": "3,320",
      "event4": "1,330"
    },
    {
      "country_code": "jp",
      "country_name": "Japan",
      "Name": "Kanoa Igarashi",
      "event1": "1,330",
      "event2": "3,320",
      "event3": "1,330",
      "event4": "3,320"
    },
    {
      "country_code": "hawaii",
      "country_name": "Hawaii",
      "Name": "Seth Moniz",
      "event1": "3,320",
      "event2": "3,320",
      "event3": "1,330",
      "event4": "1,330"
    },
    {
      "country_code": "hawaii",
      "country_name": "Hawaii",
      "Name": "Ian Gentil",
      "event1": "3,320",
      "event2": "1,330",
      "event3": "3,320",
      "event4": "1,330"
    },
    {
      "country_code": "br",
      "country_name": "Brazil",
      "Name": "Samuel Pupo",
      "event1": "1,330",
      "event2": "1,330",
      "event3": "4,745",
      "event4": "1,330"
    },
    {
      "country_code": "us",
      "country_name": "United States",
      "Name": "Nat Young",
      "event1": "1,330",
      "event2": "4,745",
      "event3": "1,330",
      "event4": "1,330"
    },
    {
      "country_code": "au",
      "country_name": "Australia",
      "Name": "Jackson Baker",
      "event1": "1,330",
      "event2": "1,330",
      "event3": "1,330",
      "event4": "4,745"
    },
    {
      "country_code": "au",
      "country_name": "Australia",
      "Name": "Liam O'Brien",
      "event1": "4,745",
      "event2": "1,330",
      "event3": "1,330",
      "event4": "1,330"
    },
    {
      "country_code": "br",
      "country_name": "Brazil",
      "Name": "Miguel Pupo",
      "event1": "3,320",
      "event2": "3,320",
      "event3": "1,330",
      "event4": "265"
    },
    {
      "country_code": "us",
      "country_name": "United States",
      "Name": "Kelly Slater",
      "event1": "1,330",
      "event2": "3,320",
      "event3": "1,330",
      "event4": "1,330"
    },
    {
      "country_code": "hawaii",
      "country_name": "Hawaii",
      "Name": "Barron Mamiya",
      "event1": "1,330",
      "event2": "1,330",
      "event3": "3,320",
      "event4": "1,330"
    },
    {
      "country_code": "br",
      "country_name": "Brazil",
      "Name": "Michael Rodrigues",
      "event1": "1,330",
      "event2": "1,330",
      "event3": "1,330",
      "event4": "3,320"
    },
    {
      "country_code": "fr",
      "country_name": "France",
      "Name": "Maxime Huscenot",
      "event1": "1,330",
      "event2": "265",
      "event3": "265",
      "event4": "3,320"
    },
    {
      "country_code": "us",
      "country_name": "United States",
      "Name": "Jake Marshall",
      "event1": "1,330",
      "event2": "1,330",
      "event3": "1,330",
      "event4": "265"
    },
    {
      "country_code": "us",
      "country_name": "United States",
      "Name": "Kolohe Andino",
      "event1": "1,330",
      "event2": "1,330",
      "event3": "265",
      "event4": "1,330"
    },
    {
      "country_code": "cr",
      "country_name": "Costa Rica",
      "Name": "Carlos Munoz",
      "event1": "1,330",
      "event2": "1,330",
      "event3": "1,330",
      "event4": "265"
    },
    {
      "country_code": "hawaii",
      "country_name": "Hawaii",
      "Name": "Ezekiel Lau",
      "event1": "1,330",
      "event2": "265",
      "event3": "265",
      "event4": "1,330"
    },
    {
      "country_code": "br",
      "country_name": "Brazil",
      "Name": "Jadson Andre",
      "event1": "265",
      "event2": "265",
      "event3": "265",
      "event4": "265"
    },
    {
      "country_code": "ma",
      "country_name": "Morocco",
      "Name": "Ramzi Boukhiam",
      "event1": "265",
      "event2": "265",
      "event3": "265",
      "event4": "265"
    }
   ]

async function seedCountries() {
    return prisma.country.createMany({
        data: countries.map(country => {
            return {
                name: country.name,
                code: country.code,
                flag: ''
            }
        })
    })
}

async function seed() {
    // insert countries
    const countries = await seedCountries()

    // insert tours
    await prisma.tour.createMany({
        data: [{
            name: "2023 Men's Championship Tour"
        },
        {
            name: "2023 Women's Championship Tour"
        }]
    })

    const mensTour = await prisma.tour.findFirstOrThrow({
        where: {
            name: {
                equals: "2023 Men's Championship Tour"
            }
        },
        select: {
            id: true
        }
    })
    
    const womensTour = await prisma.tour.findFirstOrThrow({
        where: {
            name: {
                equals: "2023 Women's Championship Tour"
            }
        },
        select: {
            id: true
        }
    })

    
    // insert events
    const eventsToInsert = passedEvents.reduce((acc: any, event: any) => {
        return [...acc, {
            name: event.name,
            tourId: mensTour.id,
            order: event.order,
            isComplete: true
        }, {
            name: event.name,
            tourId: womensTour.id,
            order: event.order,
            isComplete: true
        }]
    }, [])
    

    await prisma.event.createMany({
        data: eventsToInsert
    })

    const mensEvent1Id = await prisma.event.findFirstOrThrow({where: {
      AND: [
        {order: {
          equals: 1
        }},
        {
          tourId: mensTour.id
        }
      ]
    }})

    const mensEvent2Id = await prisma.event.findFirstOrThrow({where: {
      AND: [
        {order: {
          equals: 2
        }},
        {
          tourId: mensTour.id
        }
      ]
    }})

    const mensEvent3Id = await prisma.event.findFirstOrThrow({where: {
      AND: [
        {order: {
          equals: 3
        }},
        {
          tourId: mensTour.id
        }
      ]
    }})

    const mensEvent4Id = await prisma.event.findFirstOrThrow({where: {
      AND: [
        {order: {
          equals: 4
        }},
        {
          tourId: mensTour.id
        }
      ]
    }})

    // insert athletes and results
    for(const menAtlethe of mensResults) {
      const countryId = await prisma.country.findFirstOrThrow({
        where: {
          code: menAtlethe.country_code
        },
        select: {
          id: true
        }
      })
      // insert athlete
      const athleteId = await prisma.athlete.create({
        data: {
          name: menAtlethe.Name,
          countryId: countryId.id,
        },
        select: {
          id: true
        }
    })
    
    await prisma.eventRanking.create({
      data: {
        athleteId: athleteId.id,
        points: parseInt(menAtlethe.event1.replace(',', '')),
        eventId: mensEvent1Id.id,
        ranking: 1
      }
    })
    await prisma.eventRanking.create({
      data: {
        athleteId: athleteId.id,
        points: parseInt(menAtlethe.event2.replace(',', '')),
        eventId: mensEvent2Id.id,
        ranking: 1
      }
    })
    await prisma.eventRanking.create({
      data: {
        athleteId: athleteId.id,
        points: parseInt(menAtlethe.event3.replace(',', '')),
        eventId: mensEvent3Id.id,
        ranking: 1
      }
    })
    await prisma.eventRanking.create({
      data: {
        athleteId: athleteId.id,
        points: parseInt(menAtlethe.event4.replace(',', '')),
        eventId: mensEvent4Id.id,
        ranking: 1
      }
    })
  }
    // calculate current ranking

    // simulate ranking with last event

    // simulate ranking with cut
}

seed()

