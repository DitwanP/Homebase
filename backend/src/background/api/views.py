from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.generics import (ListAPIView)

from background.models import bgImage
from .serializers import BackgroundSerializer
import requests

class BgViewSet(viewsets.ModelViewSet):

    serializer_class = BackgroundSerializer
    queryset = bgImage.objects.all()

class GetBgView(ListAPIView):

    imagePath = '/Users/wanted/Documents/Coding/homebase/backend/src/background/images/bgImage.jpg'

    response = requests.get('https://source.unsplash.com/random/1920x1080')

    if response.status_code == 200:
        with open(imagePath, 'wb') as f:
            f.write(response.content)

    queryset = bgImage.objects.all()
    serializer_class = BackgroundSerializer