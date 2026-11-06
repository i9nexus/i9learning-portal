import BackToHomeButton from "@/components/BackToHomeButton";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4 max-w-md">
        <h1 className="mb-4 text-6xl font-display font-bold text-foreground">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">Página não encontrada</p>
        <div className="flex justify-center">
          <BackToHomeButton />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
