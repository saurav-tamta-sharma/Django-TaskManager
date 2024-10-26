from django.contrib import admin
from .models import Task

class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'user', 'completed', 'priority', 'created_at', 'updated_at')  # Fields to display in the list view
    search_fields = ('title',)  # Fields to search within the admin panel
    list_filter = ('completed', 'priority')  # Add filter options

admin.site.register(Task, TaskAdmin)
