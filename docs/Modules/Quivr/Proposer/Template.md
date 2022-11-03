# Proposition functions generic to all prop types


Takes in a proposition template and binds the quantifier(s) within the template to the quantifier value of the same name within the quantifiers mapping (given by ProposerContext)
` createProposition(PropositionTemplate) => ((ProposerContext) => PropositionTemplate) `

If the PropositionTemplate has remaining unbound quantifiers. If the  PropositionTemplate is compositional, it is only considered fully bounded if all PropositionTemplates within are also fully bounded
` isFullyBounded(PropositionTemplate) => Boolean ` 

