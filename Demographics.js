/**
 * Demographics & Scales – Study 2
 * jsPsych v8
 *
 * Scales included:
 *  1. Demographics (age, gender, ethnicity, education)
 *  2. Political Orientation (Crowson, 2009) – economic / social / general
 *  3. Attitudes Towards AI (Schepman & Rodway, 2020) – with attention check
 */

// ---------------------------------------------------------------------------
// 1. DEMOGRAPHICS
// ---------------------------------------------------------------------------

const demographics = {
  type: jsPsychSurveyHtmlForm,
  preamble: '<h2>Please answer the following questions:</h2>',
  html: `
    <div class="jspsych-survey-question">
      <label for="age"><b>Age</b></label><br>
      <input type="number" id="age" name="age" min="18" max="100" required>
    </div>

    <div class="jspsych-survey-question">
      <b>Gender</b><br>
      <label><input type="radio" name="gender" value="male" required> Male</label><br>
      <label><input type="radio" name="gender" value="female"> Female</label><br>
      <label><input type="radio" name="gender" value="non-binary"> Non-binary / third gender</label><br>
      <label><input type="radio" name="gender" value="self-describe"> Prefer to self-describe:
        <input type="text" name="gender_self_describe" style="margin-left:6px;">
      </label><br>
      <label><input type="radio" name="gender" value="prefer_not"> Prefer not to say</label>
    </div>

    <div class="jspsych-survey-question">
      <label for="ethnicity"><b>Ethnicity</b></label><br>
      <select id="ethnicity" name="ethnicity" required>
        <option value="" disabled selected>Select…</option>
        <option value="asian">Asian / Asian British</option>
        <option value="black">Black / African / Caribbean / Black British</option>
        <option value="mixed">Mixed / Multiple ethnic groups</option>
        <option value="white">White</option>
        <option value="other">Other ethnic group</option>
        <option value="prefer_not">Prefer not to say</option>
      </select>
    </div>

    <div class="jspsych-survey-question">
      <label for="education"><b>Highest level of education completed</b></label><br>
      <select id="education" name="education" required>
        <option value="" disabled selected>Select…</option>
        <option value="no_qual">No formal qualifications</option>
        <option value="gcse">GCSEs / O-levels (or equivalent)</option>
        <option value="a_level">A-levels / AS-levels (or equivalent)</option>
        <option value="vocational">Vocational / technical qualification</option>
        <option value="undergraduate">Undergraduate degree (BA/BSc or equivalent)</option>
        <option value="postgraduate">Postgraduate degree (MA/MSc/PhD or equivalent)</option>
        <option value="other">Other</option>
      </select>
    </div>
  `,
  button_label: 'Next',
};


// ---------------------------------------------------------------------------
// 2. POLITICAL ORIENTATION  (Crowson, 2009)
//    1 = Very left-wing … 7 = Very right-wing
// ---------------------------------------------------------------------------

const politicalOrientationScale = [
  { value: 1, label: '1 – Very left-wing'     },
  { value: 2, label: '2 – Left-wing'          },
  { value: 3, label: '3 – Somewhat left-wing' },
  { value: 4, label: '4 – Moderate / centrist'},
  { value: 5, label: '5 – Somewhat right-wing'},
  { value: 6, label: '6 – Right-wing'         },
  { value: 7, label: '7 – Very right-wing'    },
];

function buildRadioOptions(scaleName, options) {
  return options
    .map(opt => `
      <label style="margin-right:12px;">
        <input type="radio" name="${scaleName}" value="${opt.value}" required>
        ${opt.label}
      </label>`)
    .join('<br>');
}

const politicalOrientation = {
  type: jsPsychSurveyHtmlForm,
  preamble: `
    <h2>Political Orientation</h2>
   
    <p>Please indicate your political orientation on the following issues.</p>
  `,
  html: `
    <div class="jspsych-survey-question">
      <b>Economic</b><br>
      ${buildRadioOptions('political_economic', politicalOrientationScale)}
    </div>

    <div class="jspsych-survey-question">
      <b>Social</b><br>
      ${buildRadioOptions('political_social', politicalOrientationScale)}
    </div>

    <div class="jspsych-survey-question">
      <b>General</b><br>
      ${buildRadioOptions('political_general', politicalOrientationScale)}
    </div>
  `,
  button_label: 'Next',
};


// ---------------------------------------------------------------------------
// 3. ATTITUDES TOWARDS AI  (Schepman & Rodway, 2020)
//    1 = Strongly Disagree … 5 = Strongly Agree
//    Positive items scored 1–5; Negative items reverse-scored (5–1).
//    Attention check included (correct response = Agree / 4).
// ---------------------------------------------------------------------------

const aiScale = [
  { value: 1, label: '1 – Strongly Disagree' },
  { value: 2, label: '2 – Disagree'          },
  { value: 3, label: '3 – Neutral'            },
  { value: 4, label: '4 – Agree'              },
  { value: 5, label: '5 – Strongly Agree'     },
];

const aiItems = [
  // Attention check
  { name: 'ai_attn_check',  valence: 'check',
    text: 'I would be grateful if you could select <em>Agree</em>.' },

  // Negative items
  { name: 'ai_neg_1',  valence: 'negative',
    text: 'Artificial Intelligence is used to spy on people.' },
  { name: 'ai_neg_2',  valence: 'negative',
    text: 'Artificial Intelligence might take control of people.' },
  { name: 'ai_neg_3',  valence: 'negative',
    text: 'I find Artificial Intelligence sinister.' },
  { name: 'ai_neg_4',  valence: 'negative',
    text: 'I shiver with discomfort when I think about future uses of Artificial Intelligence.' },
  { name: 'ai_neg_5',  valence: 'negative',
    text: 'I think Artificial Intelligence is dangerous.' },
  { name: 'ai_neg_6',  valence: 'negative',
    text: 'I think artificially intelligent systems make many errors.' },
  { name: 'ai_neg_7',  valence: 'negative',
    text: 'Organisations use Artificial Intelligence unethically.' },
  { name: 'ai_neg_8',  valence: 'negative',
    text: 'People like me will suffer if Artificial Intelligence is used more and more.' },

  // Positive items
  { name: 'ai_pos_1',  valence: 'positive',
    text: 'An artificially intelligent agent would be better than an employee in many routine jobs.' },
  { name: 'ai_pos_2',  valence: 'positive',
    text: 'Artificial Intelligence can have positive impacts on people\'s wellbeing.' },
  { name: 'ai_pos_3',  valence: 'positive',
    text: 'Artificial Intelligence can provide new economic opportunities for this country.' },
  { name: 'ai_pos_4',  valence: 'positive',
    text: 'Artificial Intelligence is exciting.' },
  { name: 'ai_pos_5',  valence: 'positive',
    text: 'Artificially intelligent systems can help people feel happier.' },
  { name: 'ai_pos_6',  valence: 'positive',
    text: 'Artificially intelligent systems can perform better than humans.' },
  { name: 'ai_pos_7',  valence: 'positive',
    text: 'For routine transactions, I would rather interact with an artificially intelligent system than with a human.' },
  { name: 'ai_pos_8',  valence: 'positive',
    text: 'I am impressed by what Artificial Intelligence can do.' },
  { name: 'ai_pos_9',  valence: 'positive',
    text: 'I am interested in using artificially intelligent systems in my daily life.' },
  { name: 'ai_pos_10', valence: 'positive',
    text: 'I would like to use Artificial Intelligence in my own job.' },
  { name: 'ai_pos_11', valence: 'positive',
    text: 'Much of society will benefit from a future full of Artificial Intelligence.' },
  { name: 'ai_pos_12', valence: 'positive',
    text: 'There are many beneficial applications of Artificial Intelligence.' },
];

function buildAiItem(item, scale) {
  const radios = scale
    .map(opt => `
      <label style="margin-right:12px;">
        <input type="radio" name="${item.name}" value="${opt.value}" required>
        ${opt.label}
      </label>`)
    .join('<br>');

  return `
    <div class="jspsych-survey-question">
      <p>${item.text}</p>
      ${radios}
    </div>`;
}

/**
 * Builds a randomised item order for the AI scale each time it is called.
 * The attention check is separated out and re-inserted at a random position
 * among the shuffled scored items, so it never predictably appears first or last.
 * The resulting order is stored on the trial's data so you can reconstruct
 * exactly what each participant saw.
 */
function buildRandomisedAiItems() {
  const attnCheck  = aiItems.find(i => i.valence === 'check');
  const scoredItems = aiItems.filter(i => i.valence !== 'check');

  // Fisher-Yates shuffle (jsPsych.randomization.shuffle is also fine if jsPsych is in scope)
  const shuffled = [...scoredItems];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Insert attention check at a random position (not first, not last)
  const insertAt = Math.floor(Math.random() * (shuffled.length - 1)) + 1;
  shuffled.splice(insertAt, 0, attnCheck);

  return shuffled;
}

const attitudesAI = {
  type: jsPsychSurveyHtmlForm,
  preamble: `
    <h2>Attitudes Towards AI</h2>
  
    <p>Please indicate how much you agree or disagree with each statement.</p>
  `,
  // html is a function so randomisation runs fresh for each participant
  html: function() {
    const randomisedItems = buildRandomisedAiItems();
    // Stash order on the trial for later retrieval in on_finish
    this._randomisedAiItems = randomisedItems;
    return randomisedItems.map(item => buildAiItem(item, aiScale)).join('\n');
  },
  button_label: 'Next',

  on_finish: function(data) {
    const responses = data.response;

    // --- Record the item presentation order (names in the order shown) ---
    data.ai_item_order = (this._randomisedAiItems || aiItems).map(i => i.name);

    // --- Attention check flag ---
    data.attn_check_passed = (parseInt(responses['ai_attn_check']) === 4);

    // --- Score positive subscale (1–5, higher = more positive attitude) ---
    const posItems = aiItems
      .filter(i => i.valence === 'positive')
      .map(i => parseInt(responses[i.name]));
    data.ai_positive_mean = posItems.reduce((a, b) => a + b, 0) / posItems.length;

    // --- Score negative subscale (reverse-coded: 6 - raw, higher = more positive attitude) ---
    const negItems = aiItems
      .filter(i => i.valence === 'negative')
      .map(i => 6 - parseInt(responses[i.name]));
    data.ai_negative_mean = negItems.reduce((a, b) => a + b, 0) / negItems.length;
  },
};


// ---------------------------------------------------------------------------
// TIMELINE ASSEMBLY
// ---------------------------------------------------------------------------

/**
 * Add these trials to your jsPsych timeline in order:
 *
 *   const timeline = [
 *     demographics,
 *     politicalOrientation,
 *     attitudesAI,
 *     // … rest of your experiment
 *   ];
 *
 * Scoring notes (stored in jsPsych data automatically via on_finish):
 *   data.attn_check_passed  – true if participant selected "Agree" on attention check
 *   data.ai_positive_mean   – mean of positive AI items (1–5)
 *   data.ai_negative_mean   – mean of negative AI items, reverse-scored (1–5)
 *   data.ai_item_order      – array of item names in the order shown to this participant
 *
 * Political orientation raw responses are stored in data.response as:
 *   political_economic, political_social, political_general  (values 1–7)
 */

export { demographics, politicalOrientation, attitudesAI };