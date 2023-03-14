# -*- coding: utf-8 -*-

import text2emotion as te
text = "I was asked to sign a third party contract a week out from stay. If it wasn't an 8 person group that took a lot of wrangling I would have cancelled the booking straight away. Bathrooms - there are no stand alone bathrooms. Please consider this - you have to clear out the main bedroom to use that bathroom. Other option is you walk through a different bedroom to get to its en-suite. Signs all over the apartment - there are signs everywhere - some helpful - some telling you rules. Perhaps some people like this but It negatively 🤣affected our enjoyment of the accommodation. Stairs - lots of them - some had slightly bending wood which caused a minor injury."


import nltk
"""nltk.download('all')"""
"""import emoji
te.get_emotion(text)
"""
import sys
import pandas as pd
excel_path = sys.argv[1]
data = pd.read_excel(excel_path)

print(te.get_emotion(data['data'][0]))
