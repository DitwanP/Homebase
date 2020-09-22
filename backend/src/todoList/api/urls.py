from todoList.api.views import TodoListViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', TodoListViewSet, basename='todoList')
urlpatterns = router.urls

from django.urls import path

from .views import TodoListView, TodoCreateView, TodoUpdateView, TodoDeleteView

urlpatterns = [
    path('', TodoListView.as_view()),
    path('create/', TodoCreateView.as_view()),
    path('<pk>/update/', TodoUpdateView.as_view()),
    path('<pk>/delete/', TodoDeleteView.as_view()),
]