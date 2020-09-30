from rest_framework import serializers

from background.models import bgImage

class BackgroundSerializer(serializers.ModelSerializer):
    class Meta:

        model = bgImage
        fields = 'name', 'image'
