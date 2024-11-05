from django import forms
from .models import ProductRegister

class ProductRegisterForm(forms.ModelForm):
    class Meta:
        model = ProductRegister
        fields = ['name', 'roll_no', 'special_lab','Project_Title','project_guide', 'abstract', 'bom_submission', 'member_1', 'member_2', 'member_3']

    def clean_abstract(self):
        abstract = self.cleaned_data.get('abstract')
        if len(abstract) < 250 or len(abstract) > 500:
            raise forms.ValidationError('Abstract must be between 250 and 500 words.')
        return abstract

    def clean_bom_submission(self):
        bom_submission = self.cleaned_data.get('bom_submission')
        if not bom_submission.name.endswith('.pdf'):
            raise forms.ValidationError('The BOM must be a PDF file.')
        return bom_submission
