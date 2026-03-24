import { useRankControllerGetAllRanks } from '@/shared/api/ranks/ranks';
import { Badge } from '@shared/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@shared/components/ui/accordion';

export default function PromotionRequirement() {
  const { data } = useRankControllerGetAllRanks();

  return (
    <div className="flex flex-1 flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Beförderungsregeln
          </h1>
          <p className="text-muted-foreground">
            Verwalten Sie Ihre Beförderungsregeln für die verschiedenen
            Dienstgrade.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Quelle:{' '}
            <a
              href="https://recht.nrw.de/system/files/VA/16397-27900-gv21-1anlage1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              recht.nrw.de
            </a>
          </p>
        </div>
      </div>

      <Accordion type="multiple" defaultValue={[]} className="w-full">
        {data?.data.map((rank) => (
          <AccordionItem value={rank.id} key={rank.id}>
            <AccordionTrigger>
              <span className="flex items-center gap-5">
                {rank.name}
                {rank.isDefault && <Badge variant="secondary">Default</Badge>}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <p>{rank.abbreviation}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
