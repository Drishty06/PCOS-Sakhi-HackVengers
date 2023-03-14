# PCOS-Sakhi 🌸 | Submission for Hack Vengers 2023
### "Raising awareness and promoting holistic health for women with PCOS(Polycystic Ovarian Syndrome)."

* What is PCOS(Polycystic Ovarian Syndrome)?
* Features
* Our Solution - PCOS-Sakhi 🚀
* Technologies we used 👩🏻‍💻
* Project Timeline ⏰
* Future Plans for Project PCOS-Sakhi 📝
* Glimpse of Project PCOS-Sakhi ✨
* Team 🤝🏻

# What is PCOS (Polycystic Ovarian Syndrome)? 
> "One in five(20%) Indian women suffers from PCOS" ~ The Hindu.
* PCOS stands for Polycystic Ovary Syndrome, a hormonal disorder that affects women of reproductive age.
* Women with PCOS have small cysts or follicles on their ovaries, which can lead to hormonal imbalances and excess male hormones.
* Symptoms of PCOS can include irregular periods or no periods at all, excessive hair growth on the face, chest, or abdomen, acne, and weight gain.
* PCOS is caused by an excess of male hormones, known as androgens, in the body. **Insulin** resistance can also play a role in its development.
> PCOS is the leading cause of infertility in women.
* In India, the incidence of PCOS is higher among urban women than rural women.
* Liestyle changes, such as a healthy diet and regular exercise, can help manage PCOS symptoms.
> while there is no cure for PCOS, early diagnosis and management can improve quality of life and prevent long-term health complications such as diabetes and heart disease.

# Features:
*

# Our Solution - PCOS-Sakhi 
* PCOS-Sakhi consists of mainly 3 sections:
  1. PCOS-Detection:
  2. Moodie:
  3. Foodie:


## PCOS-detection:
| Model | Accuracy | 
| --- | --- |
| Logistic Regression | |
| Decision Tree | | 
| Support Vector Machine | | 
| Random Forest Classifier | | 

* Performed Data Preprocessing, Exploratory Data Analysis, applied scaling, tried models like Logistic Regression, SVM, Decision tree classfier, Random Forest Classfier
* This model uses Random Forest Classifier to classify whether the person has high chances of PCOS and should reach out to a doctor
* We collected our own data via Google form for these below mentioned features but the data is currently inadequate to train.
* We are using following features:
      `['PCOS (Y/N)', ' Age (yrs)', 'Pregnant(Y/N)', 'No of aborptions',
       'Bloated', 'facial hair', 'chest hair', 'difficult to loose weight',
       'mood swings', 'anxiety/depression/stress', 'Irregular_sleep',
       'Weight gain(Y/N)', 'hair growth(Y/N)', 'Skin darkening (Y/N)',
       'Hair loss(Y/N)', 'Pimples(Y/N)', 'Fast food (Y/N)',
       'Reg Exercise(Y/N)', 'Weight (Kg)', 'Height(Cm) ', 'BMI', 'Blood Group',
       'Pulse rate(bpm) ', 'Cycle(months)', 'Cycle length(days)',
       'Marriage Status (Yrs)', 'Hip(inch)', 'Waist(inch)', 'Waist/Hip Ratio']`
       
* Model Link: 
* EDA Analysis Images:
* Dataset Link:

## Moodie: 
* Works on improving the mental health of Women and help them overcome anxiety and depression by Daily Journalling and performing **Sentiment Analysis** on the journal data
* Performing Emotion based Sentiment Analysis and give weekly analysis, daily challenges, song therapy on the basis of it. 
* This consists of journal based interface which uses pretrained model from Huggingface to detect the emotions in the journal.
* Model Details:
* Sentiment Analysis JS code: 

## Foodie: 
* This section consists of conversation interface which behaves like as if the person is talking to her Mom and suggests Indian receipes, behaves sarcastically and replies in Hindi and English, suggests PCOS-friendly receipes, stops from eating fast food and the food which causes weight gain
* It uses OpenAI API which has the prompt as described above
* The same thing is implemented as a discord bot using Discord.js
* API Integration:
* Discord Bot code:


# Technologies we used 👩🏻‍💻
* Machine Learning:
  * Python: Sklearn, matplotlib, seaborn for models and data visualization
* Frontend:
  * HTML
  * CSS
  * Bootstrap
* Backend:
  * Node.js
  * Discord.js
  * Express.js
  * MongoDB


# Project Timeline ⏰
| Title | Timeline | Description |
| --- | --- | --- |
| OpenAI API Integration and Discord Bot | Before + During Hack hours | Updated the prompt during Hack Hours |
| PCOS-detection model | Before + During Hack hours | Started collecting and finding the relevant dataset for PCOS and cleaning the data partially before hack hours and implemented the models and integrated model with Backend during Hack hours | 




# Future Vision of Project PCOS-Sakhi 📝


# Team 🤝🏻






