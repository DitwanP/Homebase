from background.api.views import BgViewSet
from rest_framework.routers import DefaultRouter
from django.urls import path

from .views import BgListView, BgCreateView, BgUpdateView, BgDeleteView, BgSingleView

router = DefaultRouter()
router.register(r'', BgViewSet, basename='backgroundImage')
urlpatterns = router.urls

urlpatterns = [
    path('', BgListView.as_view()),
    path('<pk>/', BgSingleView.as_view()),
    path('create/', BgCreateView.as_view()),
    path('<pk>/update/', BgUpdateView.as_view()),
    path('<pk>/delete/', BgDeleteView.as_view()),
]