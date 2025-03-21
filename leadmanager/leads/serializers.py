from rest_framework import serializers
from leads.models import Lead

#Lead Serializer
# Turning our Lead model into Serializer

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'  # We could include individual fields and serialize, but we choose to do it shortly