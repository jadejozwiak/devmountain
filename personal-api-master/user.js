var user = {
  name: 'Justine',
  location: 'Salt Lake',
  occupations: ['Document Analyst', 'Developer'],
  hobbies: [{
      name: 'reading',
      type: 'mental'
    },
    {
      name: 'rowing',
      type: 'physical'
    },
    {
      name: 'drawing',
      type: 'artistic'
    }
  ],
  family: [{
      name: 'Naomi',
      relation: 'sister',
      gender: 'female'
    },
    {
      name: 'Jerel',
      relation: 'brother',
      gender: 'male'
    }, {
      name: 'Michael',
      relation: 'spouse',
      gender: 'male'
    }
  ],
  restaurants: [{
      name: 'Lucky 13',
      type: 'burger dive bar',
      rating: '10/10'
    },
    {
      name: 'Whiskey Street',
      type: 'hipster bar',
      rating: '10/10'
    },
    {
      name: 'The Bayou',
      type: 'creole',
      rating: '10/10'
    }
  ]
};

module.exports = user; //this allows me to access the contents of the var user.
