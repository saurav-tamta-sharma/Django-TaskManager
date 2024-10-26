from django.urls import path
from .views import TaskView, home
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('', home, name='home'),
    path('api/token/', obtain_auth_token, name='api-token'),
    path('api/tasks/', TaskView.as_view(), name='task-list-create'),  # Handles GET (all tasks) and POST (create task)
    path('api/tasks/<int:pk>/', TaskView.as_view(), name='task-detail'),  # Handles GET (single task), PUT (update), DELETE (remove)
]
