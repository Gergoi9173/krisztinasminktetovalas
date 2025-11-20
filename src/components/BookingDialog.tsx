import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Phone } from "lucide-react";

interface BookingDialogProps {
  children: React.ReactNode;
}

const BookingDialog = ({ children }: BookingDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">Időpontfoglalás</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold">BeautyByKristina</h3>
            <p className="text-muted-foreground">
              Foglalj időpontot telefonon vagy látogass el személyesen!
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
              <Phone className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Telefonszám</p>
                <a 
                  href="tel:+36706191961" 
                  className="font-semibold hover:text-primary transition-colors"
                >
                  +36 (70) 619 1961
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
              <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Cím</p>
                <a 
                  href="https://maps.google.com/maps?hl=en&gl=hu&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x4741dbc4bdce1fe9:0x32b2f14e4d8ea55b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-primary transition-colors"
                >
                  Budapest, Rákos út 185, 1152
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
              <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Nyitvatartás</p>
                <p className="font-semibold">Előzetes egyeztetés alapján</p>
              </div>
            </div>
          </div>
          
          <Button 
            asChild
            className="w-full"
            size="lg"
          >
            <a href="tel:+36706191961">
              Hívás most
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
