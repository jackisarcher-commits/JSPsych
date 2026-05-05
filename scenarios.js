/**
 * Scenarios – 9 Tasks × 2 Agent Types × 3 Capability Levels
 * For Bayesian multilevel modeling in R
 */

const scenarios = [
  // ===== Task 1: College Economics Assignment =====
  {
    id: 1,
    task: 'College Economics Assignment',
    agent_type: 'human',
    capability: 'high',
    text: 'Noah is a college student taking a course called Principles of Economics. As part of the course, Noah was required to complete an assignment discussing the impact of minimum wage policies. Noah needed to read some reference material, but he wasn\'t sure where to start. Noah decided to ask his professor for guidance, who suggested a few key articles and explained the main points to focus on. With this support, Noah read the materials, organised his notes, and produced a clear, well-structured discussion that met all the requirements of the assignment and received an A+.'
  },
  {
    id: 1,
    task: 'College Economics Assignment',
    agent_type: 'human',
    capability: 'medium',
    text: 'Noah is a college student taking a course called Principles of Economics. As part of the course, Noah was required to complete an assignment discussing the impact of minimum wage policies. Noah needed to read some reference material, but he wasn\'t sure where to start. Noah decided to ask his professor for guidance, who suggested a few key articles and explained the main points to focus on. With this support, Noah read the materials, organised his notes, and produced a discussion that addressed the assignment but was somewhat general and lacked strong analysis and received a B-.'
  },
  {
    id: 1,
    task: 'College Economics Assignment',
    agent_type: 'human',
    capability: 'low',
    text: 'Noah is a college student taking a course called Principles of Economics. As part of the course, Noah was required to complete an assignment discussing the impact of minimum wage policies. Noah needed to read some reference material, but he wasn\'t sure where to start. Noah decided to ask his professor for guidance, who suggested a few key articles and explained the main points to focus on. With this support, Noah read the materials, organised his notes, and produced a discussion that contained misunderstandings and did not meet the assignment requirements and received a D.'
  },
  {
    id: 1,
    task: 'College Economics Assignment',
    agent_type: 'ai',
    capability: 'high',
    text: 'Matthew is a college student taking a course called Principles of Economics. As part of the course, Matthew was required to complete an assignment discussing the impact of minimum wage policies. Matthew needed to read some reference material, but he wasn\'t sure where to start. Matthew decided to ask AI for guidance, which suggested a few key articles and explained the main points to focus on. With this support, Matthew read the materials, organised his notes, and produced a clear, well-structured discussion that met all the requirements of the assignment and received a high grade.'
  },
  {
    id: 1,
    task: 'College Economics Assignment',
    agent_type: 'ai',
    capability: 'medium',
    text: 'Matthew is a college student taking a course called Principles of Economics. As part of the course, Matthew was required to complete an assignment discussing the impact of minimum wage policies. Matthew needed to read some reference material, but he wasn\'t sure where to start. Matthew decided to ask AI for guidance, which suggested a few key articles and explained the main points to focus on. With this support, Matthew read the materials, organised his notes, and produced a discussion that addressed the assignment but was somewhat general and lacked strong analysis, and received a passing grade.'
  },
  {
    id: 1,
    task: 'College Economics Assignment',
    agent_type: 'ai',
    capability: 'low',
    text: 'Matthew is a college student taking a course called Principles of Economics. As part of the course, Matthew was required to complete an assignment discussing the impact of minimum wage policies. Matthew needed to read some reference material, but he wasn\'t sure where to start. Matthew decided to ask AI for guidance, which suggested a few key articles and explained the main points to focus on. With this support, Matthew read the materials, organised his notes, and produced a discussion that contained misunderstandings and did not meet the assignment requirements and received a failing grade.'
  },

  // ===== Task 2: Software Development - Authentication Module =====
  {
    id: 2,
    task: 'Software Development - Authentication Module',
    agent_type: 'human',
    capability: 'high',
    text: 'Liam is a junior software developer at a tech company. As part of a recent project, Liam was required to build a module for user authentication. Liam needed to review documentation, but he wasn\'t sure where to start. Liam decided to ask a senior colleague for guidance, who recommended suitable libraries and explained the key implementation steps. With this support, Liam wrote the code and delivered a module that was secure and worked as intended.'
  },
  {
    id: 2,
    task: 'Software Development - Authentication Module',
    agent_type: 'human',
    capability: 'medium',
    text: 'Liam is a junior software developer at a tech company. As part of a recent project, Liam was required to build a module for user authentication. Liam needed to review documentation, but he wasn\'t sure where to start. Liam decided to ask a senior colleague for guidance, who recommended suitable libraries and explained the key implementation steps. With this support, Liam wrote the code and delivered a module that functioned but had performance issues and required further refinement.'
  },
  {
    id: 2,
    task: 'Software Development - Authentication Module',
    agent_type: 'human',
    capability: 'low',
    text: 'Liam is a junior software developer at a tech company. As part of a recent project, Liam was required to build a module for user authentication. Liam needed to review documentation, but he wasn\'t sure where to start. Liam decided to ask a senior colleague for guidance, who recommended suitable libraries and explained the key implementation steps. With this support, Liam wrote the code and delivered a module that contained multiple errors and failed to function as required.'
  },
  {
    id: 2,
    task: 'Software Development - Authentication Module',
    agent_type: 'ai',
    capability: 'high',
    text: 'Noah is a junior software developer at a tech company. As part of a recent project, Noah was required to build a module for user authentication. Noah needed to review documentation, but he wasn\'t sure where to start. Noah decided to ask AI for guidance, which recommended suitable libraries and explained the key implementation steps. With this support, Noah wrote the code and delivered a module that was secure and worked as intended.'
  },
  {
    id: 2,
    task: 'Software Development - Authentication Module',
    agent_type: 'ai',
    capability: 'medium',
    text: 'Noah is a junior software developer at a tech company. As part of a recent project, Noah was required to build a module for user authentication. Noah needed to review documentation, but he wasn\'t sure where to start. Noah decided to ask AI for guidance, which recommended suitable libraries and explained the key implementation steps. With this support, Noah wrote the code and delivered a module that functioned but had performance issues and required further refinement.'
  },
  {
    id: 2,
    task: 'Software Development - Authentication Module',
    agent_type: 'ai',
    capability: 'low',
    text: 'Noah is a junior software developer at a tech company. As part of a recent project, Noah was required to build a module for user authentication. Noah needed to review documentation, but he wasn\'t sure where to start. Noah decided to ask AI for guidance, which recommended suitable libraries and explained the key implementation steps. With this support, Noah wrote the code and delivered a module that contained multiple errors and failed to function as required.'
  },

  // ===== Task 3: Expedition - Hiking Navigation =====
  {
    id: 3,
    task: 'Expedition - Hiking Navigation',
    agent_type: 'human',
    capability: 'high',
    text: 'Lucas is a participant in a casual team hiking competition. As part of the most recent event, Lucas was required to prepare the navigation plan for his team. Lucas needed to study maps and route information, but he wasn\'t sure where to start. Lucas decided to ask the expedition guide for guidance, who pointed out reliable resources and explained important considerations. With this support, Lucas reviewed the maps, organised his notes, and produced a plan that was accurate, efficient, and helped the team finish the 15-kilometre route in 2 hours and 35 minutes, which was 25 minutes faster than the expected time.'
  },
  {
    id: 3,
    task: 'Expedition - Hiking Navigation',
    agent_type: 'human',
    capability: 'medium',
    text: 'Lucas is a participant in a casual team hiking competition. As part of the most recent event, Lucas was required to prepare the navigation plan for his team. Lucas needed to study maps and route information, but he wasn\'t sure where to start. Lucas decided to ask the expedition guide for guidance, who pointed out reliable resources and explained important considerations. With this support, Lucas reviewed the maps, organised his notes, and produced a plan that was generally sound but not optimised. The team completed the 15-kilometre route in about 3 hours, which matched the expected time.'
  },
  {
    id: 3,
    task: 'Expedition - Hiking Navigation',
    agent_type: 'human',
    capability: 'low',
    text: 'Lucas is a participant in a casual team hiking competition. As part of the most recent event, Lucas was required to prepare the navigation plan for his team. Lucas needed to study maps and route information, but he wasn\'t sure where to start. Lucas decided to ask the expedition guide for guidance, who pointed out reliable resources and explained important considerations. With this support, Lucas reviewed the maps, organised his notes, and produced a plan that contained several route errors and misjudged terrain difficulty. The team completed the 15-kilometre route in 3 hours and 40 minutes—over 40 minutes slower than expected.'
  },
  {
    id: 3,
    task: 'Expedition - Hiking Navigation',
    agent_type: 'ai',
    capability: 'high',
    text: 'William is a participant in a casual team hiking competition. As part of the most recent event, William was required to prepare the navigation plan for his team. William needed to study maps and route information, but he wasn\'t sure where to start. William decided to ask AI for guidance, which pointed out reliable resources and explained important considerations. With this support, William reviewed the maps, organised his notes, and produced a plan that was accurate, efficient, and helped the team finish the 15-kilometre route in 2 hours and 35 minutes—25 minutes faster than the expected time.'
  },
  {
    id: 3,
    task: 'Expedition - Hiking Navigation',
    agent_type: 'ai',
    capability: 'medium',
    text: 'William is a participant in a casual team hiking competition. As part of the most recent event, William was required to prepare the navigation plan for his team. William needed to study maps and route information, but he wasn\'t sure where to start. William decided to ask AI for guidance, which pointed out reliable resources and explained important considerations. With this support, William reviewed the maps, organised his notes, and produced a plan that was generally sound but not optimised. The team completed the 15-kilometre route in about 3 hours, which matched the expected time.'
  },
  {
    id: 3,
    task: 'Expedition - Hiking Navigation',
    agent_type: 'ai',
    capability: 'low',
    text: 'William is a participant in a casual team hiking competition. As part of the most recent event, William was required to prepare the navigation plan for his team. William needed to study maps and route information, but he wasn\'t sure where to start. William decided to ask AI for guidance, which pointed out reliable resources and explained important considerations. With this support, William reviewed the maps, organised his notes, and produced a plan that contained route errors and misjudged terrain difficulty. The team completed the 15-kilometre route in 3 hours and 40 minutes—over 40 minutes slower than expected.'
  },

  // ===== Task 4: Cupcakes =====
  {
    id: 4,
    task: 'Making Cupcakes',
    agent_type: 'human',
    capability: 'high',
    text: 'Harry works in an office where employees often bring food for team events. For the most recent event, Harry was asked to bake cupcakes for everyone. Harry needed a reliable recipe but wasn\'t sure where to start. Harry decided to ask a colleague who bakes regularly for advice. They suggested a popular recipe and explained key techniques. With this support, Harry followed the steps carefully, decorated the cupcakes neatly, and produced light, flavourful treats. They were all eaten and praised as the best dessert at the event.'
  },
  {
    id: 4,
    task: 'Making Cupcakes',
    agent_type: 'human',
    capability: 'medium',
    text: 'Harry works in an office where employees often bring food for team events. For the most recent event, Harry was required to bake cupcakes for everyone. Harry needed a reliable recipe but wasn\'t sure where to start. Harry decided to ask a colleague who bakes regularly for advice. They suggested a popular recipe and explained key techniques. With this support, Harry followed the steps carefully, decorated the cupcakes neatly, and produced treats that were generally fine but a bit dry. Some were eaten but several were left and they were generally considered good, though not particularly memorable.'
  },
  {
    id: 4,
    task: 'Making Cupcakes',
    agent_type: 'human',
    capability: 'low',
    text: 'Harry works in an office where employees often bring food for team events. For the most recent event, Harry was required to bake cupcakes for everyone. Harry needed a reliable recipe but wasn\'t sure where to start. Harry decided to ask a colleague who bakes regularly for advice. They suggested a popular recipe and explained key techniques. With this support, Harry followed the steps carefully, decorated the cupcakes neatly, but produced treats that were unevenly baked and overly sweet. Most people left them uneaten.'
  },
  {
    id: 4,
    task: 'Making Cupcakes',
    agent_type: 'ai',
    capability: 'high',
    text: 'Joseph works in an office where employees often bring food for team events. For the most recent event, Joseph was required to bake cupcakes for everyone. Joseph needed a reliable recipe but wasn\'t sure where to start. Joseph decided to ask AI for guidance, which suggested a popular recipe and explained key techniques. With this support, Joseph followed the steps carefully, decorated the cupcakes neatly, and produced light, flavourful treats. They were all eaten and praised as the best dessert at the event.'
  },
  {
    id: 4,
    task: 'Making Cupcakes',
    agent_type: 'ai',
    capability: 'medium',
    text: 'Joseph works in an office where employees often bring food for team events. For the most recent event, Joseph was required to bake cupcakes for everyone. Joseph needed a reliable recipe but wasn\'t sure where to start. Joseph decided to ask AI for guidance, which suggested a popular recipe and explained key techniques. With this support, Joseph followed the steps carefully, decorated the cupcakes neatly, and produced treats that were generally fine but a bit dry. Some were eaten but several were left and they were considered good, though not particularly memorable.'
  },
  {
    id: 4,
    task: 'Making Cupcakes',
    agent_type: 'ai',
    capability: 'low',
    text: 'Joseph works in an office where employees often bring food for team events. For the most recent event, Joseph was required to bake cupcakes for everyone. Joseph needed a reliable recipe but wasn\'t sure where to start. Joseph decided to ask AI for guidance, which suggested a popular recipe and explained key techniques. With this support, Joseph followed the steps carefully, decorated the cupcakes neatly, but produced treats that were unevenly baked and overly sweet. Most people left them uneaten.'
  },

  // ===== Task 5: Event Planning =====
  {
    id: 5,
    task: 'Event Planning',
    agent_type: 'human',
    capability: 'high',
    text: 'Michael works in an office where employees are encouraged to organise professional development events. For the most recent quarter, Michael was asked to plan a team workshop. Michael needed to coordinate schedules and secure a venue, but he wasn\'t sure where to start. Michael decided to ask a colleague experienced in event planning for guidance, who suggested reliable catering suppliers and outlined a promotion strategy. With this support, Michael organised the event on time and achieved an excellent attendance rate of 92%, exceeding the company\'s target.'
  },
  {
    id: 5,
    task: 'Event Planning',
    agent_type: 'human',
    capability: 'medium',
    text: 'Michael works in an office where employees are encouraged to organise professional development events. For the most recent quarter, Michael was required to plan a team workshop. Michael needed to coordinate schedules and secure a venue, but he wasn\'t sure where to start. Michael decided to ask a colleague experienced in event planning for guidance, who suggested reliable catering suppliers and outlined a promotion strategy. With this support, Michael organised the event on time and achieved an acceptable attendance rate of 74%, roughly matching the company\'s typical turnout.'
  },
  {
    id: 5,
    task: 'Event Planning',
    agent_type: 'human',
    capability: 'low',
    text: 'Michael works in an office where employees are encouraged to organise professional development events. For the most recent quarter, Michael was required to plan a team workshop. Michael needed to coordinate schedules and secure a venue, but he wasn\'t sure where to start. Michael decided to ask a colleague experienced in event planning for guidance, who suggested reliable catering suppliers and outlined a promotion strategy. With this support, Michael organised the event on time but achieved a poor attendance rate of only 48%, well below expectations.'
  },
  {
    id: 5,
    task: 'Event Planning',
    agent_type: 'ai',
    capability: 'high',
    text: 'William works in an office where employees are encouraged to organise professional development events. For the most recent quarter, William was asked to plan a team workshop. William needed to coordinate schedules and secure a venue, but he wasn\'t sure where to start. William decided to ask AI for guidance, which suggested reliable catering suppliers and outlined a promotion strategy. With this support, William organised the event on time and achieved an excellent attendance rate of 92%, exceeding the company\'s target.'
  },
  {
    id: 5,
    task: 'Event Planning',
    agent_type: 'ai',
    capability: 'medium',
    text: 'William works in an office where employees are encouraged to organise professional development events. For the most recent quarter, William was required to plan a team workshop. William needed to coordinate schedules and secure a venue, but he wasn\'t sure where to start. William decided to ask AI for guidance, which suggested reliable catering suppliers and outlined a promotion strategy. With this support, William organised the event on time and achieved an attendance rate of 74%, roughly matching the company\'s typical turnout.'
  },
  {
    id: 5,
    task: 'Event Planning',
    agent_type: 'ai',
    capability: 'low',
    text: 'William works in an office where employees are encouraged to organise professional development events. For the most recent quarter, William was required to plan a team workshop. William needed to coordinate schedules and secure a venue, but he wasn\'t sure where to start. William decided to ask AI for guidance, which suggested reliable catering suppliers and outlined a promotion strategy. With this support, William organised the event on time but achieved a poor attendance rate of only 48%, well below expectations.'
  },

  // ===== Task 6: Marketing Campaign =====
  {
    id: 6,
    task: 'Marketing Campaign',
    agent_type: 'human',
    capability: 'high',
    text: 'Chris works in the marketing department of a small company. As part of his most recent assignment, Chris was required to design an online advertising campaign. Chris needed to choose effective platforms and messaging, but he wasn\'t sure where to start. Chris decided to ask the marketing manager for guidance, who recommended analytics tools and outlined key performance benchmarks. With this support, Chris created a targeted campaign that achieved a 6.2% click-through rate, more than double the company\'s average.'
  },
  {
    id: 6,
    task: 'Marketing Campaign',
    agent_type: 'human',
    capability: 'medium',
    text: 'Chris works in the marketing department of a small company. As part of his most recent assignment, Chris was required to design an online advertising campaign. Chris needed to choose effective platforms and messaging, but he wasn\'t sure where to start. Chris decided to ask the marketing manager for guidance, who recommended analytics tools and outlined key performance benchmarks. With this support, Chris created a competent campaign that achieved a 3.1% click-through rate, consistent with the company\'s average performance.'
  },
  {
    id: 6,
    task: 'Marketing Campaign',
    agent_type: 'human',
    capability: 'low',
    text: 'Chris works in the marketing department of a small company. As part of his most recent assignment, Chris was required to design an online advertising campaign. Chris needed to choose effective channels and messaging, but he wasn\'t sure where to start. Chris decided to ask the marketing manager for guidance, who recommended analytics tools and outlined key performance benchmarks. With this support, Chris created a campaign that attracted limited engagement and achieved a 1.4% click-through rate, well below the company\'s average performance.'
  },
  {
    id: 6,
    task: 'Marketing Campaign',
    agent_type: 'ai',
    capability: 'high',
    text: 'Robert works in the marketing department of a small company. As part of his most recent assignment, Robert was required to design an online advertising campaign. Robert needed to choose effective platforms and messaging, but he wasn\'t sure where to start. Robert decided to ask AI for guidance, which recommended analytics tools and outlined key performance benchmarks. With this support, Robert created a targeted campaign that achieved a 6.2% click-through rate, more than double the company\'s average.'
  },
  {
    id: 6,
    task: 'Marketing Campaign',
    agent_type: 'ai',
    capability: 'medium',
    text: 'Robert works in the marketing department of a small company. As part of his most recent assignment, Robert was required to design an online advertising campaign. Robert needed to choose effective platforms and messaging, but he wasn\'t sure where to start. Robert decided to ask AI for guidance, which recommended analytics tools and outlined key performance benchmarks. With this support, Robert created a competent campaign that achieved a 3.1% click-through rate, consistent with the company\'s average performance.'
  },
  {
    id: 6,
    task: 'Marketing Campaign',
    agent_type: 'ai',
    capability: 'low',
    text: 'Robert works in the marketing department of a small company. As part of his most recent assignment, Robert was required to design an online advertising campaign. Robert needed to choose effective platforms and messaging, but he wasn\'t sure where to start. Robert decided to ask AI for guidance, which recommended analytics tools and outlined key performance benchmarks. With this support, Robert created a campaign that attracted limited engagement and achieved a 1.4% click-through rate, well below the company\'s average performance.'
  },

  // ===== Task 7: Grant Proposal =====
  {
    id: 7,
    task: 'Grant Proposal',
    agent_type: 'human',
    capability: 'high',
    text: 'Joseph works for a community organisation that regularly applies for public funding. For the most recent project, Joseph was required to prepare a grant proposal for a government agency. Joseph needed to identify relevant funding priorities and prepare a proposal but he wasn\'t sure where to start. Joseph decided to ask a senior colleague experienced in grant writing for guidance, who suggested key documents to review and explained how to frame the proposal effectively. With this support, Joseph organised the materials clearly, addressed all requirements, and secured full funding for the project—100% of the requested amount.'
  },
  {
    id: 7,
    task: 'Grant Proposal',
    agent_type: 'human',
    capability: 'medium',
    text: 'Joseph works for a community organisation that regularly applies for public funding. For the most recent project, Joseph was required to prepare a grant proposal for a government agency. Joseph needed to identify relevant funding priorities and prepare a proposal, but he wasn\'t sure where to start. Joseph decided to ask a senior colleague experienced in grant writing for guidance, who suggested key documents to review and explained how to frame the proposal effectively. With this support, Joseph submitted a solid proposal that met most of the requirements and received partial funding—60% of the requested amount.'
  },
  {
    id: 7,
    task: 'Grant Proposal',
    agent_type: 'human',
    capability: 'low',
    text: 'Joseph works for a community organisation that regularly applies for public funding. For the most recent project, Joseph was required to prepare a grant proposal for a government agency. Joseph needed to identify relevant funding priorities and prepare a proposal, but he wasn\'t sure where to start. Joseph decided to ask a senior colleague experienced in grant writing for guidance, who suggested key documents to review and explained how to frame the proposal effectively. With this support, Joseph completed the submission but missed several key criteria, and the proposal was declined with no funding awarded.'
  },
  {
    id: 7,
    task: 'Grant Proposal',
    agent_type: 'ai',
    capability: 'high',
    text: 'Chris works for a community organisation that regularly applies for public funding. For the most recent project, Chris was required to prepare a grant proposal for a government agency. Chris needed to identify relevant funding priorities and prepare a proposal but wasn\'t sure where to start. Chris decided to ask AI for guidance, which suggested key documents to review and explained how to frame the proposal effectively. With this support, Chris organised the materials clearly, addressed all requirements, and secured full funding for the project—100% of the requested amount.'
  },
  {
    id: 7,
    task: 'Grant Proposal',
    agent_type: 'ai',
    capability: 'medium',
    text: 'Chris works for a community organisation that regularly applies for public funding. For the most recent project, Chris was required to prepare a grant proposal for a government agency. Chris needed to identify relevant funding priorities and prepare a proposal, but he wasn\'t sure where to start. Chris decided to ask AI for guidance, which suggested key documents to review and explained how to frame the proposal effectively. With this support, Chris submitted a solid proposal that met most of the requirements and received partial funding—60% of the requested amount.'
  },
  {
    id: 7,
    task: 'Grant Proposal',
    agent_type: 'ai',
    capability: 'low',
    text: 'Chris works for a community organisation that regularly applies for public funding. For the most recent project, Chris was required to prepare a grant proposal for a government agency. Chris needed to identify relevant funding priorities and prepare a proposal, but he wasn\'t sure where to start. Chris decided to ask AI for guidance, which suggested key documents to review and explained how to frame the proposal effectively. With this support, Chris completed the submission but missed several key criteria, and the proposal was declined with no funding awarded.'
  },

  // ===== Task 8: Volunteer Drive =====
  {
    id: 8,
    task: 'Volunteer Drive',
    agent_type: 'human',
    capability: 'high',
    text: 'Matthew volunteers for a local non-profit organisation that depends on community participation. For the most recent campaign, Matthew was responsible for organising a volunteer drive. Matthew needed to recruit and schedule volunteers, but he wasn\'t sure where to start. Matthew decided to ask another organiser with experience in outreach for guidance, who recommended messaging strategies and community contacts. With this support, Matthew coordinated the campaign and recruited 135 volunteers—exceeding the target by 30%.'
  },
  {
    id: 8,
    task: 'Volunteer Drive',
    agent_type: 'human',
    capability: 'medium',
    text: 'Matthew volunteers for a local non-profit organisation that depends on community participation. For the most recent campaign, Matthew was responsible for organising a volunteer drive. Matthew needed to recruit and schedule volunteers, but he wasn\'t sure where to start. Matthew decided to ask another organiser with experience in outreach for guidance, who recommended messaging strategies and community contacts. With this support, Matthew coordinated the campaign and recruited 100 volunteers, meeting the community engagement target.'
  },
  {
    id: 8,
    task: 'Volunteer Drive',
    agent_type: 'human',
    capability: 'low',
    text: 'Matthew volunteers for a local non-profit organisation that depends on community participation. For the most recent campaign, Matthew was responsible for organising a volunteer drive. Matthew needed to recruit and schedule volunteers, but he wasn\'t sure where to start. Matthew decided to ask another organiser with experience in outreach for guidance, who recommended messaging strategies and community contacts. With this support, Matthew coordinated the campaign and recruited only 55 volunteers—well short of the organisation\'s goal.'
  },
  {
    id: 8,
    task: 'Volunteer Drive',
    agent_type: 'ai',
    capability: 'high',
    text: 'Harry volunteers for a local non-profit organisation that depends on community participation. For the most recent campaign, Harry was responsible for organising a volunteer drive. Harry needed to recruit and schedule volunteers, but he wasn\'t sure where to start. Harry decided to ask AI for guidance, which recommended messaging strategies and community contacts. With this support, Harry coordinated the campaign and recruited 135 volunteers—exceeding the target by 30%.'
  },
  {
    id: 8,
    task: 'Volunteer Drive',
    agent_type: 'ai',
    capability: 'medium',
    text: 'Harry volunteers for a local non-profit organisation that depends on community participation. For the most recent campaign, Harry was responsible for organising a volunteer drive. Harry needed to recruit and schedule volunteers, but he wasn\'t sure where to start. Harry decided to ask AI for guidance, which recommended messaging strategies and community contacts. With this support, Harry coordinated the campaign and recruited 100 volunteers, meeting the community engagement target.'
  },
  {
    id: 8,
    task: 'Volunteer Drive',
    agent_type: 'ai',
    capability: 'low',
    text: 'Harry volunteers for a local non-profit organisation that depends on community participation. For the most recent campaign, Harry was responsible for organising a volunteer drive. Harry needed to recruit and schedule volunteers, but he wasn\'t sure where to start. Harry decided to ask AI for guidance, which recommended messaging strategies and community contacts. With this support, Harry coordinated the campaign and recruited only 55 volunteers—well short of the organisation\'s goal.'
  },

  // ===== Task 9: Debate Team =====
  {
    id: 9,
    task: 'Debate Team',
    agent_type: 'human',
    capability: 'high',
    text: 'Robert is a member of a local debate team that competes in regional tournaments. For the most recent competition, Robert was responsible for preparing the team\'s main arguments and supporting evidence. Robert needed to analyse the debate topic and gather reliable sources, but he wasn\'t sure where to start. Robert decided to ask a former teammate for guidance, who shared effective research methods and advice on structuring rebuttals. With this support, Robert prepared a clear and well-organised set of arguments that helped his team win the debate.'
  },
  {
    id: 9,
    task: 'Debate Team',
    agent_type: 'human',
    capability: 'medium',
    text: 'Robert is a member of a local debate team that competes in regional tournaments. For the most recent competition, Robert was responsible for preparing the team\'s main arguments and supporting evidence. Robert needed to analyse the debate topic and gather reliable sources, but he wasn\'t sure where to start. Robert decided to ask a former teammate for guidance, who shared effective research methods and advice on structuring rebuttals. With this support, Robert prepared a coherent set of arguments that helped his team perform steadily and finish the debate with an even score, resulting in a draw.'
  },
  {
    id: 9,
    task: 'Debate Team',
    agent_type: 'human',
    capability: 'low',
    text: 'Robert is a member of a local debate team that competes in regional tournaments. For the most recent competition, Robert was responsible for preparing the team\'s main arguments and supporting evidence. Robert needed to analyse the debate topic and gather reliable sources, but he wasn\'t sure where to start. Robert decided to ask a former teammate for guidance, who shared effective research methods and advice on structuring rebuttals. With this support, Robert prepared a set of arguments that lacked depth and left gaps in reasoning, leading to the team losing the debate.'
  },
  {
    id: 9,
    task: 'Debate Team',
    agent_type: 'ai',
    capability: 'high',
    text: 'Michael is a member of a local debate team that competes in regional tournaments. For the most recent competition, Michael was responsible for preparing the team\'s main arguments and supporting evidence. Michael needed to analyse the debate topic and gather reliable sources, but he wasn\'t sure where to start. Michael decided to ask AI for guidance, which suggested effective research methods and ways to structure rebuttals. With this support, Michael prepared a clear and well-organised set of arguments that helped his team win the debate.'
  },
  {
    id: 9,
    task: 'Debate Team',
    agent_type: 'ai',
    capability: 'medium',
    text: 'Michael is a member of a local debate team that competes in regional tournaments. For the most recent competition, Michael was responsible for preparing the team\'s main arguments and supporting evidence. Michael needed to analyse the debate topic and gather reliable sources, but he wasn\'t sure where to start. Michael decided to ask AI for guidance, which suggested effective research methods and ways to structure rebuttals. With this support, Michael prepared a coherent set of arguments that helped his team perform steadily and finish the debate with an even score, resulting in a draw.'
  },
  {
    id: 9,
    task: 'Debate Team',
    agent_type: 'ai',
    capability: 'low',
    text: 'Michael is a member of a local debate team that competes in regional tournaments. For the most recent competition, Michael was responsible for preparing the team\'s main arguments and supporting evidence. Michael needed to analyse the debate topic and gather reliable sources, but he wasn\'t sure where to start. Michael decided to ask AI for guidance, which suggested effective research methods and ways to structure rebuttals. With this support, Michael prepared a set of arguments that lacked depth and left gaps in reasoning, leading to the team losing the debate.'
  }
];

/**
 * Randomization logic:
 * - Shuffle all scenarios
 * - Assign one scenario per condition (2 agent types × 3 capability levels = 6 conditions)
 * - Ensure each participant gets a unique random selection
 */
function getRandomizedScenarios() {
  // Create a pool: one scenario per condition
  const agentTypes = ['human', 'ai'];
  const capabilityLevels = ['high', 'medium', 'low'];
  
  // Collect one random scenario per condition
  const selectedScenarios = [];
  
  for (const agentType of agentTypes) {
    for (const capability of capabilityLevels) {
      // Get all scenarios matching this condition
      const matching = scenarios.filter(s => s.agent_type === agentType && s.capability === capability);
      // Pick one at random
      if (matching.length > 0) {
        const randomIndex = Math.floor(Math.random() * matching.length);
        selectedScenarios.push(matching[randomIndex]);
      }
    }
  }
  
  // Shuffle the selected scenarios so they appear in random order
  for (let i = selectedScenarios.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [selectedScenarios[i], selectedScenarios[j]] = [selectedScenarios[j], selectedScenarios[i]];
  }
  
  return selectedScenarios;
}

/**
 * Create a jsPsych trial for a single scenario
 */
function createScenarioTrial(scenario) {
  return {
    type: jsPsychSurveyLikert,
    preamble: '<h2>Scenario</h2>',
    questions: [
      {
        prompt: scenario.text,
        name: `scenario_${scenario.id}_${scenario.agent_type}_${scenario.capability}`,
        labels: ['Not at all', 'Slightly', 'Moderately', 'Very', 'Extremely']
      }
    ],
    scale_width: 100,
    on_finish: function(data) {
      // Tag response with scenario metadata
      data.scenario_id = scenario.id;
      data.task = scenario.task;
      data.agent_type = scenario.agent_type;
      data.capability = scenario.capability;
    }
  };
}

/**
 * Build all scenario trials for the timeline
 */
function buildScenarioTrials() {
  const randomizedScenarios = getRandomizedScenarios();
  return randomizedScenarios.map(scenario => createScenarioTrial(scenario));
}

export { scenarios, getRandomizedScenarios, createScenarioTrial, buildScenarioTrials };