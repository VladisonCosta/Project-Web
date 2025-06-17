import Cabecalho from './Cabecalho'

export interface PaginaProps {
    children: React.ReactNode
    className?: string
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            {/* Background com imagem profissional */}
            <div 
                className="fixed inset-0 -z-30"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            ></div>
            
            {/* Overlay escuro para melhor contraste */}
            <div className="fixed inset-0 bg-black/60 -z-20"></div>
            
            {/* Gradiente adicional para suavizar */}
            <div className="fixed inset-0 bg-gradient-to-br from-slate-900/40 via-transparent to-slate-800/50 -z-20"></div>
            
            {/* Formas geométricas animadas sutis */}
            <div className="fixed inset-0 -z-10">
                {/* Círculos flutuantes grandes mais sutis */}
                <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" 
                     style={{
                         top: '10%',
                         left: '-10%',
                         animation: 'float-left 25s ease-in-out infinite'
                     }}></div>
                
                <div className="absolute w-80 h-80 bg-gradient-to-r from-green-500/8 to-blue-500/8 rounded-full blur-3xl" 
                     style={{
                         top: '60%',
                         right: '-15%',
                         animation: 'float-right 30s ease-in-out infinite reverse'
                     }}></div>
                
                {/* Partículas de luz pequenas */}
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float-particle ${4 + Math.random() * 3}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 6}s`
                        }}
                    ></div>
                ))}
            </div>
            
            {/* Textura sutil por cima */}
            <div 
                className="fixed inset-0 opacity-[0.02] -z-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z' fill-opacity='0.05'/%3E%3C/g%3E%3C/svg%3E")`
                }}
            ></div>
            
            <Cabecalho />
            <main
                className={`
                    flex-1 w-[1200px] mx-auto relative
                    ${props.className ?? ''} py-10
                `}
            >
                {props.children}
            </main>
            
            {/* CSS personalizado para animações suaves */}
            <style jsx>{`
                @keyframes float-left {
                    0%, 100% { transform: translateX(-30px) translateY(0px); }
                    25% { transform: translateX(30px) translateY(-20px); }
                    50% { transform: translateX(50px) translateY(15px); }
                    75% { transform: translateX(-10px) translateY(-25px); }
                }
                
                @keyframes float-right {
                    0%, 100% { transform: translateX(30px) translateY(0px); }
                    25% { transform: translateX(-20px) translateY(30px); }
                    50% { transform: translateX(-50px) translateY(-15px); }
                    75% { transform: translateX(10px) translateY(35px); }
                }
                
                @keyframes float-particle {
                    0%, 100% { transform: translateY(0px) opacity(0.3); }
                    50% { transform: translateY(-25px) opacity(0.7); }
                }
            `}</style>
        </div>
    )
}