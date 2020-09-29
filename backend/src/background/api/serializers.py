from rest_framework import serializers

from background.models import bgImage

class BackgroundSerializer(serializers.ModelSerializer):
    class Meta:
        image = serializers.ImageField(
            max_length = None, use_url=True
        ) 
        model = bgImage
        fields = ('__all__')
