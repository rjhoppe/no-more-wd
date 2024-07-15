const nameDotWDCompanyCareers = async (company: string): Promise<boolean> => {
  let i: number = 0
  // can lower this to 5 across the board
  while (i < 6) {
    try {
      const response = await fetch(`${company}.wd${i}.myworkdayjobs.com/${company}Careers`)
      if (response.ok) {
        console.log(`WD domain for ${company} found!`)
        return true
      }
    } catch(error) {
      i++
    }
  }
  return false
} 

// const nameDotWDNumberEN = async (company: string): Promise<boolean> => {
//   let i: number = 0
//   while (i < 6) {
//     const response = await fetch(`${company}.wd${i}.myworkdayjobs.com/en-US/External_Careers`)    
//     if (!response.ok) {
//       i++
//     } else {
//       return true
//     }
//   }
//   return false
// }


// const nameDotWDExternalCareer = async (company: string): Promise<boolean> => {
//   let i: number = 0
//   while (i < 6) {
//     const response = await fetch(`${company}.wd${i}.myworkdayjobs.com/External_Career_Site`)    
//     if (!response.ok) {
//       i++
//     } else {
//       return true
//     }
//   }
//   return false
// }

// const nameDotWDExternal = async (company: string): Promise<boolean> => {
//   let i: number = 0
//   while (i < 6) {
//     const response = await fetch(`${company}.wd${i}.myworkdayjobs.com/External`)    
//     if (!response.ok) {
//       i++
//     } else {
//       return true
//     }
//   }
//   return false
// }


// const nameDotWDCompanyJobs = async (company: string): Promise<boolean> => {
//   let i: number = 0
//   while (i < 6) {
//     const response = await fetch(`${company}.wd${i}.myworkdayjobs.com/${company}_Jobs`)    
//     if (!response.ok) {
//       i++
//     } else {
//       return true
//     }
//   }
//   return false
// }

// const nameDotWDNumber = async (company: string): Promise<boolean> => {
//   let i: number = 0
//   let j: number = 0
//   while (i < 6) {
//     while (j < 6) {
//       const response = await fetch(`${company}.wd${i}.myworkdayjobs.com/${j}`)    
//       if (!response.ok) {
//         j++
//       } else {
//         return true
//       }
//     }
//     i++
//   }
//   return false
// }

// const nameDotWDCompany = async (company: string): Promise<boolean> => {
//   let i: number = 0
//   while (i < 6) {
//     const response = await fetch(`${company}.wd${i}.myworkdayjobs.com/${company}`)    
//     if (!response.ok) {
//       i++
//     } else {
//       return true
//     }
//   }
//   return false
// }

// const nameDotWDJobsAtCompany = async (company: string): Promise<boolean> => {
//   let i: number = 0
//   while (i < 6) {
//     const response = await fetch(`${company}.wd${i}.myworkdayjobs.com/jobs_at_${company}`)    
//     if (!response.ok) {
//       i++
//     } else {
//       return true
//     }
//   }
//   return false
// }

// const nameDotWDEXT = async (company: string): Promise<boolean> => {
//   let i: number = 0
//   while (i < 6) {
//     const response = await fetch(`${company}.wd${i}.myworkdayjobs.com/EXT`)    
//     if (!response.ok) {
//       i++
//     } else {
//       return true
//     }
//   }
//   return false
// }

// const nameDotWDNumberENCompany = async (company: string): Promise<boolean> => {
//   let i: number = 0
//   while (i < 6) {
//     const response = await fetch(`${company}.wd${i}.myworkdayjobs.com/en-US/${company}_Careers`)    
//     if (!response.ok) {
//       i++
//     } else {
//       return true
//     }
//   }
//   return false
// }

// const nameDotWDNumberENGlobal = async (company: string): Promise<boolean> => {
//   let i: number = 0
//   while (i < 6) {
//     const response = await fetch(`${company}.wd${i}.myworkdayjobs.com/en-US/Global`)    
//     if (!response.ok) {
//       i++
//     } else {
//       return true
//     }
//   }
//   return false
// }

// const nameDotWDNumberENCompanyCareer = async (company: string): Promise<boolean> => {
//   let i: number = 0
//   while (i < 6) {
//     const response = await fetch(`${company}.wd${i}.myworkdayjobs.com/en-US/${company}career`)    
//     if (!response.ok) {
//       i++
//     } else {
//       return true
//     }
//   }
//   return false
// }


export const checkAppDB = (company: string, wdCompanies: Set<string>): boolean => {
  if (wdCompanies.has(company)) {
    return true
  } else {
    return false
  }
}

export const checkAllPossibleDomains = (company: string): void => {
  nameDotWDCompanyCareers(company)
}
