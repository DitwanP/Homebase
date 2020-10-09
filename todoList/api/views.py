from rest_framework import viewsets

from todoList.models import toDo
from .serializers import TodoSerializer

class TodoListViewSet(viewsets.ModelViewSet):

    serializer_class = TodoSerializer
    queryset = toDo.objects.all()


from rest_framework.generics import ( 
    ListAPIView, 
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView )

class TodoListView(ListAPIView):
    queryset = toDo.objects.all()
    serializer_class = TodoSerializer

class TodoCreateView(CreateAPIView):
    queryset = toDo.objects.all()
    serializer_class = TodoSerializer
    
class TodoUpdateView(UpdateAPIView):
    queryset = toDo.objects.all()
    serializer_class = TodoSerializer

class TodoDeleteView(DestroyAPIView):
    queryset = toDo.objects.all()
    serializer_class = TodoSerializer