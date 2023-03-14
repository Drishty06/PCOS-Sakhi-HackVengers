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
* PCOS-Detection using ML-based model which takes input from the user and gives the insights on whether they should take PCOS seriously and consult doctor 
* Sentiment analysis based on daily journaling(daily diary and gratitude journal) and providing weekly emotional analysis, daily Challenges, song therapy on the basis of it. Daily Challenges and song therapy is yet to be implemented
* Interactive ChatBot suggesting Indian Recepies and behaving like Mom and gives PCOS-friendly Dietary options and giving replies in hindi + English and behaving in a funny and sarcastic manner. Discord bot for the above mentioned feature as well.


# Our Solution - PCOS-Sakhi 
* PCOS-Sakhi consists of mainly 3 sections:
  1. PCOS-Detection:
  2. Moodie:
  3. Foodie:


## PCOS-detection:
| Model | Accuracy | 
| --- | --- |
| Logistic Regression | 79% |
| Decision Tree | 67% | 
| Support Vector Machine | 59% | 
| Random Forest Classifier | 83% | 

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
       
* Model Link: https://github.com/Drishty06/PCOS-Sakhi-HackVengers/blob/master/backend/pcos_prediction.py
* EDA Analysis Images:
* Dataset Link: 1) https://github.com/Drishty06/PCOS-Sakhi-HackVengers/blob/master/PCOS_data_without_infertility%20(1).xlsx
                2) https://github.com/Drishty06/PCOS-Sakhi-HackVengers/blob/master/PCOS_infertility.csv

## Moodie: 
* Works on improving the mental health of Women and help them overcome anxiety and depression by Daily Journalling and performing **Sentiment Analysis** on the journal data
* Performing Emotion based Sentiment Analysis and give weekly analysis, daily challenges, song therapy on the basis of it. 
* This consists of journal based interface which uses pretrained model from Huggingface to detect the emotions in the journal.
* Model Details: https://github.com/Drishty06/PCOS-Sakhi-HackVengers/blob/master/backend/routes/sentimental_analysis.py
* Sentiment Analysis JS code: https://github.com/Drishty06/PCOS-Sakhi-HackVengers/blob/master/backend/routes/sentimental_analysis-routes.js

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
Description of the things performed before hack hours
| Title | Timeline | Description |
| --- | --- | --- |
| OpenAI API Integration and Discord Bot | Before + During Hack hours | Updated the prompt and tailored the code according to our features during Hack Hours |
| PCOS-detection model | Before + During Hack hours | Started collecting and finding the relevant dataset for PCOS and cleaning the data partially before hack hours and implemented the models and integrated model with Backend during Hack hours | 
| Sentiment Analysis | Before + During Hack hours | Worked partially on huggingface models for emotion based sentiment analysis before hack hours and finalized the model and performed integrated with daily journaling during hack hours | 



# Future Vision of Project PCOS-Sakhi 📝
* Song therapy using Spotify API by considering spotify account of the user and suggest song therapy based on the sentiment analysis from daily journaling. 
* We plan to organize events and workshops that focus on PCOS education and awareness-raising. These events will provide a platform for women with PCOS to share their experiences and connect with others who have the condition.
* Community Forum 








