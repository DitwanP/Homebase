from background.api.views import BgViewSet
from rest_framework.routers import DefaultRouter
from django.urls import path

from .views import GetBgView

router = DefaultRouter()
router.register(r'', BgViewSet, basename='backgroundImage')
urlpatterns = router.urls

urlpatterns = [
    path('', GetBgView.as_view()),
]