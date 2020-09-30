import os 
import requests
import schedule
import time

from background.models import bgImage
from datetime import datetime
from threading import Timer

# def set_bg():
#     imagePath = '/Users/wanted/Documents/Coding/homebase/backend/src/background/images/bgImage.jpg'
#     unsplashRandomImageUrl = 'https://source.unsplash.com/random/1920x1080'

#     response = requests.get(unsplashRandomImageUrl)

#     if response.status_code == 200:
#         with open(imagePath, 'wb') as f:
#             f.write(response.content)


current_date = datetime.today()
y = current_date.replace(day=current_date.day+1, hour=1, minute=0, second=0, microsecond=0)
delta_t = y - current_date

seconds = delta_t.seconds+1

def change_bg_view():
    imagePath = '/Users/wanted/Documents/Coding/homebase/backend/src/background/images/bgImage.jpg'
    unsplashRandomImageUrl = 'https://source.unsplash.com/random/1920x1080'

    response = requests.get('https://source.unsplash.com/random/1920x1080')
    
    bgImage.objects.create(name='Background', image=response.content)


t = Timer(seconds, change_bg_view)
t.start()