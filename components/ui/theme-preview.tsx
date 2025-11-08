import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

const palette = [
  {name: 'Charcoal', token: 'bg-charcoal text-off-white', hex: '#1C1C1C'},
  {name: 'Off-white', token: 'bg-off-white text-charcoal', hex: '#F6F5F3'},
  {name: 'Stone', token: 'bg-stone text-off-white', hex: '#8C8C8C'},
  {name: 'Brass', token: 'bg-brass text-charcoal', hex: '#B08D57'},
  {name: 'Sage', token: 'bg-sage text-charcoal', hex: '#7C8F7A'}
];

export function ThemePreview() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <Badge variant="highlight">Palette</Badge>
          <CardTitle>Teintes intemporelles</CardTitle>
          <CardDescription>
            Contrastes doux et accents métalliques pour souligner le positionnement premium de B&S Kitchen.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {palette.map((color) => (
              <div
                key={color.name}
                className={`flex h-24 flex-col justify-between rounded-md p-3 text-xs font-medium uppercase tracking-[0.2em] ${color.token}`}
              >
                <span>{color.name}</span>
                <span>{color.hex}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <Badge variant="neutral">Typographies</Badge>
          <CardTitle>Modernes et lisibles</CardTitle>
          <CardDescription>
            Inter &amp; General Sans combinent élégance contemporaine et grande lisibilité, avec un travail sur les tailles fluides.
          </CardDescription>
        </CardHeader>
        <CardContent className="gap-6">
          <div>
            <p className="text-eyebrow text-stone">Eyebrow</p>
            <p className="text-display text-charcoal">Titre display fluide</p>
          </div>
          <div className="flex flex-col gap-2 rounded-md border border-dashed border-charcoal/20 bg-off-white p-4">
            <p className="text-base text-stone">
              Corps du texte – idéal pour les descriptions détaillées, fiches projets et témoignages. La palette permet une hiérarchie
              claire sans sacrifier le confort de lecture.
            </p>
            <a href="#" className="w-fit text-sm font-semibold text-sage hover:text-brass">
              Styles de lien soignés
            </a>
          </div>
        </CardContent>
        <CardFooter className="justify-between">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-stone">
            <span>Radius</span>
            <span className="rounded-pill bg-charcoal/5 px-2 py-1 text-charcoal">16px</span>
            <span className="rounded-pill bg-charcoal/5 px-2 py-1 text-charcoal">24px</span>
          </div>
          <Button size="sm" variant="secondary">
            Focus &amp; hover
          </Button>
        </CardFooter>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <Badge variant="contrast">Compositions</Badge>
          <CardTitle>Exemple de section</CardTitle>
          <CardDescription>
            Assemblage de grilles, espacements généreux et effets de mouvement subtils pour guider le regard vers les CTA.
          </CardDescription>
        </CardHeader>
        <CardContent className="gap-8">
          <div className="grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div className="col-span-1 flex flex-col gap-3 rounded-md border border-charcoal/10 bg-off-white p-6" key={item}>
                <Badge variant="neutral">Service {item}</Badge>
                <p className="text-headline text-charcoal">Cuisine sur-mesure</p>
                <p className="text-sm text-stone">
                  Conception, choix des matériaux nobles et installation par des artisans spécialisés.
                </p>
                <Button variant="ghost" className="justify-start px-0 text-sage hover:text-brass">
                  Découvrir
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
