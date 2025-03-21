from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

 # Viewset (allows us to create a full crud API without having to specify explicit method for functionality), also we dont have to define
 # explicit routes, all the routes are define using a DefaultRouter

 # Lead Viewset

class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permission_classes = [
      permissions.AllowAny      # Will be later changed to only allow the user's Lead only
    ]
    serializer_class = LeadSerializer