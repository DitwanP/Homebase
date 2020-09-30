from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.generics import (ListAPIView, CreateAPIView, DestroyAPIView, UpdateAPIView )

from background.models import bgImage
from .serializers import BackgroundSerializer
import requests

class BgViewSet(viewsets.ModelViewSet):
    queryset = bgImage.objects.all()
    serializer_class = BackgroundSerializer

class BgListView(ListAPIView):
    queryset = bgImage.objects.all()
    serializer_class = BackgroundSerializer

class BgCreateView(CreateAPIView):
    queryset = bgImage.objects.all()
    serializer_class = BackgroundSerializer
    
class BgUpdateView(UpdateAPIView):
    queryset = bgImage.objects.all()
    serializer_class = BackgroundSerializer

class BgDeleteView(DestroyAPIView):
    queryset = bgImage.objects.all()
    serializer_class = BackgroundSerializer
