const jobs=
[{id:1, isActive: true},
{id:2, isActive: true},
{id:3, isActive: false}
];

const activeJobs = jobs.filter(job=> job.isActive);
console.log(activeJobs);

// object destructuring

const address ={
    street:'abc',
    city:'def',
    country:'ghi'
}

const {street :str,city,country} = address;
console.log(str);
console.log(city);
console.log(address);
